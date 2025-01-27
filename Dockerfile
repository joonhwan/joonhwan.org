LABEL org.opencontainers.image.source=https://github.com/joonhwan/joonhwan.org
FROM node:23.2.0-bullseye-slim AS vite
WORKDIR /src/OrgWebClient
COPY ["./OrgWebClient/package.json", "./OrgWebClient/pnpm-lock.yaml", "./"]
RUN npm install -g pnpm
RUN pnpm install
COPY ["./OrgWebClient/", "./"]
RUN pnpm run build

FROM mcr.microsoft.com/dotnet/aspnet:9.0 AS base
USER $APP_UID
WORKDIR /app
EXPOSE 8080
EXPOSE 8081

FROM mcr.microsoft.com/dotnet/sdk:9.0 AS build
ARG BUILD_CONFIGURATION=Release
WORKDIR /src/OrgWeb
COPY ["./OrgWeb/OrgWeb.csproj", "./"]
RUN dotnet restore "OrgWeb.csproj"
COPY ./OrgWeb .   
COPY --from=vite /src/OrgWeb/wwwroot ./wwwroot
RUN dotnet build "OrgWeb.csproj" -c $BUILD_CONFIGURATION -o /app/build

FROM build AS publish
ARG BUILD_CONFIGURATION=Release
RUN dotnet publish "OrgWeb.csproj" -c $BUILD_CONFIGURATION -o /app/publish /p:UseAppHost=false

FROM base AS final
WORKDIR /app
COPY --from=publish /app/publish .

# ENTRYPOINT 대신 CMD 사용해서 `docker run -it --rm orgweb bash` 같이 별도의 명령어를 실행가능하게 함  
# ENTRYPOINT ["dotnet", "OrgWeb.dll"]
CMD ["dotnet", "OrgWeb.dll"]
