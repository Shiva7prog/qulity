let quality = prompt("Select video quality:\n1. 720p\n2. 1080p\n3. 4K\n\nEnter the quality number (1, 2, or 3):");


switch (quality) {
    case '1':
        alert("You selected 720p quality.\n- Standard HD\n- Requires less bandwidth\n- Good for small screens.");
        break;

    case '2':
        alert("You selected 1080p quality.\n- Full HD\n- Requires moderate bandwidth\n- Good for most screens.");
        break;

    case '3':
        alert("You selected 4K quality.\n- Ultra HD\n- Requires high bandwidth\n- Best for large screens.");
        break;

    default:
        alert("Invalid selection. Please enter a valid quality number (1, 2, or 3).");
        break;
}