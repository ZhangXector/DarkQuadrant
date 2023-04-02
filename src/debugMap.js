let grid = null;
let tbody = null;

function setCellValue(x, y, value)
{
    if (x <= 0 || y <= 0 || !value) return;

    if (!grid)
    {
        grid = document.getElementById('grid');
        tbody = grid.children.item(0);
    }
    tbody.children.item(y).children.item(x).innerHTML = value;
}