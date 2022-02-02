import { WebPartContext } from "@microsoft/sp-webpart-base";
import { SPHttpClientResponse, SPHttpClient } from "@microsoft/sp-http";


export default class SPService {
  constructor(private context: WebPartContext) { }

  getListItems(listName: string, webUrl: string = this.context.pageContext.web.absoluteUrl) {
    return this.context.spHttpClient.get(`${webUrl}/_api/web/lists/getbytitle('${listName}')/items?$top=15`, SPHttpClient.configurations.v1)
      .then((response: SPHttpClientResponse) => response.json())
      .then((data) => data, error => { console.error('Oops Error') })
  }


}