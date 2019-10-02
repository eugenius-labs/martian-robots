class Planet {

    constructor(width,height){
        this.Width = width;
        this.Height = height;
        this.Scents = [];
    }

    addScent(scent){
        this.Scents.push(scent);
    }

    hasScentAt(x,y){
        var match = this.Scents.find((item) => (item.PosX === x && item.PosY) === y);
        return match;
    }
}

export default Planet;