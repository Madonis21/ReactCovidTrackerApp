export class TableModel {
  country: string;
  confirmedCases: number;
  totalDeaths: number;
  totalRecovered: number;

  constructor(resource: any) {
    this.country = resource.Country;
    this.confirmedCases = resource.TotalConfirmed;
    this.totalDeaths = resource.TotalDeaths;
    this.totalRecovered = resource.TotalRecovered;
  }

  public getUIFriendlyPropertyNames = () => {
    return {
      Country: this.country,
      "Confirmed Cases": this.confirmedCases,
      "Total Deaths": this.totalDeaths,
      "Total Recovered": this.totalRecovered,
    };
  };
}
