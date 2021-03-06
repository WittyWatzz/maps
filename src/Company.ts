import faker from 'faker'; //npm module to generate fake details

export class Company {
  companyName: string;
  catchPhrase: string;
  location: {
    lat: number,
    lng: number
  };

   constructor(){
    this.companyName = faker.company.companyName();
    this.catchPhrase = faker.company.catchPhrase();
    this.location = {
      lat: parseFloat(faker.address.latitude()),
      lng: parseFloat(faker.address.longitude()),
    };
  };
  markerContent():string{
    return `
    <div>
    <h2>Company name is ${this.companyName}</h2>
    <h4>Catch phrase is ${this.catchPhrase}</h4>
    </div>
    `
  };
};
