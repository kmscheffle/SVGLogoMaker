


class Shape {
    constructor(color, size, position) {
        this.color = color;
        this.size = size;
        this.position = position;
    }

    render() {
        // Implement the render method to return the SVG markup for the shape
        // You can use the properties (color, size, position) to generate the SVG markup
    }
}

class Triangle extends Shape {
    constructor(color, size, position, angle) {
        super(color, size, position);
        this.angle = angle;
    }

    render() {
        const { color, position, size, angle } = this;
        const halfSize = size / 2;
        const x1 = position.x - halfSize;
        const y1 = position.y + halfSize;
        const x2 = position.x + halfSize;
        const y2 = position.y + halfSize;
        const x3 = position.x;
        const y3 = position.y - halfSize;

        const svgMarkup = `<polygon points="${x1},${y1} ${x2},${y2} ${x3},${y3}" fill="${color}" />`;
        return svgMarkup;
    }
}

class Circle extends Shape {
    constructor(color, size, position, radius) {
        super(color, size, position);
        this.radius = radius;
    }
    render() {
        const { color, position, radius } = this;
        const svgMarkup = `<circle cx="${position.x}" cy="${position.y}" r="${radius}" fill="${color}" />`;
        return svgMarkup;
    }
}

class Square extends Shape {
    constructor(color, size, position, sideLength) {
        super(color, size, position);
        this.sideLength = sideLength;
    }

    render() {
        const { color, size, position, sideLength } = this;
        const svgMarkup = `<rect x="${position.x}" y="${position.y}" width="${sideLength}" height="${sideLength}" fill="${color}" />`;
        return svgMarkup;
    }
}