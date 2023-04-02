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
    tbody.children.item(y - 1).children.item(x - 1).innerHTML = value;
}