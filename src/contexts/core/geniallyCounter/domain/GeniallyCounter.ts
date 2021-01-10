export default class GeniallyCounter {

  private _count: number

  constructor(count?: number){
    this._count = count || 0;
  }

  get count() {
    return this._count;
  }

  increase(){
    this._count = this._count + 1;
  }
}