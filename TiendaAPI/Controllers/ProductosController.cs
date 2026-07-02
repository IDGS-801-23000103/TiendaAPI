using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using TiendaAPI.Models;

namespace TiendaAPI.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class ProductosController : ControllerBase
    {
        private readonly TiendaContext _context;

        public ProductosController(TiendaContext context)
        {
            _context = context;
        }

        [HttpGet]
        public async Task<ActionResult<IEnumerable<object>>> GetProductos()
        {
            var productos = await _context.Productos
                .Include(p => p.IdCategoriaNavigation)
                .Select(p => new
                {
                    p.IdProducto,
                    p.Nombre,
                    p.Descripcion,
                    p.Precio,
                    p.Imagen,
                    Categoria = p.IdCategoriaNavigation.Nombre
                })
                .ToListAsync();

            return Ok(productos);
        }
    }
}