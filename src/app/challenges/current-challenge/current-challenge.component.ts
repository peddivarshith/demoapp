import { Component,OnInit} from "@angular/core";
import { storage } from "nativescript-plugin-firebase";
import { File,knownFolders,path } from "tns-core-modules/file-system";
import { Progress } from "tns-core-modules/ui/progress";
import { BehaviorSubject } from "rxjs";
import * as firebase from "nativescript-plugin-firebase";
//import { Observable } from "tns-core-modules/modules/data/observable";

@Component({

    selector: "ns-current-challenge",
    templateUrl: "./current-challenge.component.html",
    styleUrls: ["./current-challenge.component.css"],
    moduleId: module.id

})
export class CurrentChallengeComponent{
    name_details="";
    pass_details="";
    add_details="";

    uploadFile(){
        //console.log("succesfully stores Mr/MS. "+this.name_details);
        alert("Are you sure you want to save!");
        console.log("100%");
        console.log(this.name_details+"   "+this.pass_details+"  "+this.add_details);
        let data={
            "name":this.name_details,
            "password":this.pass_details,
            "email":this.add_details
        }
        console.log(JSON.stringify(data));

        const c1 = firebase.firestore.collection("users");
        c1.add(data);

    }
}

