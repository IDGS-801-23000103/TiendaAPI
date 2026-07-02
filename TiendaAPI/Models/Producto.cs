using System;
using System.Collections.Generic;

namespace TiendaAPI.Models;

public partial class Producto
{
    public int IdProducto { get; set; }

    public string? Nombre { get; set; }

    public string? Descripcion { get; set; }

    public decimal? Precio { get; set; }

    public string? Imagen { get; set; }

    public int? IdCategoria { get; set; }

    public virtual Categoria? IdCategoriaNavigation { get; set; }
}
