using InertiaCore;
using Microsoft.AspNetCore.Mvc;

namespace OrgWeb.Controllers;

public class BlogController : Controller
{
    private readonly ILogger<BlogController> _logger;

    public BlogController(ILogger<BlogController> logger)
    {
        _logger = logger;
    }

    public IActionResult Index()
    {
        return Inertia.Render("Blog", new { Message = "Hello World!" });
    }
}