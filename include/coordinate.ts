export class Coordinates {
    _lat: number = 0;
    _lon: number = 0;
    _alt: number =0;
    constructor(lon:number, lat: number,  alt:number) {
        this.lat = lat ;
        this.lon = lon;
        this.alt = alt;
    }

    get lat() {
        return this._lat;
    }
    set lat(value: number) {
        if (value <= 0) {
            throw "Value must be bigger than 0";
        }
        if (value !== this._lat) {
            this._lat = value;
        }
    }

    set lon(value: number) {
        if (value <= 0) {
            throw "Value must be bigger than 0";
        }
        if (value !== this._lon) {
            this._lon = value;
        }
    }

    set alt(value: number) {
        if (value !== this._alt) {
            this._alt = value;
        }
    }
}