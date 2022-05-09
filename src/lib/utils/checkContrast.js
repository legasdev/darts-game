function checkContrast(red, green, blue) {
    const
        brightness = ((red * 299) + (green * 587) + (blue * 114)) / 255000;

    // values range from 0 to 1
    // anything greater than 0.5 should be bright enough for dark text
    return brightness >= 0.5;
}

export { checkContrast };