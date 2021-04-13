import { Component,Inject, OnInit, AfterContentInit, AfterViewInit , AfterContentChecked} from '@angular/core';
import {ViewChild} from '@angular/core';
import {MatPaginator} from '@angular/material/paginator';
import {MatTableDataSource} from '@angular/material/table';
import {ActivatedRoute, Router} from '@angular/router';
import {MatSort , Sort} from '@angular/material/sort'; 
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
import { NgForm } from '@angular/forms';
import {Apollo , QueryRef} from 'apollo-angular';
import gql from "graphql-tag";
import { map, shareReplay } from 'rxjs/operators';
import { from, Observable, of } from 'rxjs'
import { error } from 'selenium-webdriver';
import { stringify } from '@angular/compiler/src/util';
import {MatSnackBar} from '@angular/material/snack-bar';
import { SelectionModel } from '@angular/cdk/collections';
import {UpgradecommandService} from './service/upgradecommand.service'
import { MatTableExporterDirective } from 'mat-table-exporter';
import * as XLSX from 'xlsx';

export type otherotapcommand ={
  DeviceID:Number;
  DeviceType:String;
  Customer:String;
  NetworkProvider:String;
  MobileNo:Number;
  Model:String;
  VehicleTypeName:String;
  CurrentCVersion:String;
  CurrentJavaVersion:String;
  Ignition:String;
}


export type DataQuery ={
  otherotapcommand:otherotapcommand[]
}


export type OtapCommand = {
  DeviceID:String;
  PacketID:Number;
  Name:String;
  Message:String
}
export type DataQuery1 ={
  OtapCommand:OtapCommand[]
}

const UPVOTE_POST = gql`

mutation addotapcommand($PacketID:Int! ,$DeviceID: String!, $Name: String!,$Message: String!) {
  addotapcommand (PacketID: $PacketID,DeviceID: $DeviceID,Name: $Name,Message: $Message ){
    PacketID
    DeviceID
    Name
    Message
  }
}
`;


@Component({
  selector: 'app-other-otap-command',
  templateUrl: './other-otap-command.component.html',
  styleUrls: ['./other-otap-command.component.css']
})
export class OtherOTAPCommandComponent implements OnInit , AfterViewInit , AfterContentChecked ,AfterContentInit {

  public file : File;
  fileToUpload: File;
  id = 0;
  tabIndex = 0;
  loadingFlag = true;
  temp = null
  messages:object =[];
  emp1:object =[];
  arrayBuffer:any;
  filelist: any;
  deviceArr = [];
  entries: object =[];
  loadingFlag1 = true;
  //displayedColumns: string[] = ['select','id','name','cn','np','mn1','mn2','ssd','sed','vtn','model','ccv','cjv'];
  displayedColumns: string[]=["select","DeviceID","DeviceType","Customer","NetworkProvider","MobileNo","Model","VehicleTypeName","CurrentCVersion","CurrentJavaVersion","Ignition"]
  dataSource : MatTableDataSource<any>
  dataSource1 : MatTableDataSource<any>
  selection = new SelectionModel(false, []);
  deviceType


  public device;
  public messageFormat;
  public messageName;
  
  //@ViewChild(MatPaginator) paginator: MatPaginator;
  //@ViewChild(MatSort) sort: MatSort;

  private paginator: MatPaginator;
  private sort: MatSort;

  @ViewChild(MatTableExporterDirective, { static: false }) exporter: MatTableExporterDirective;
  @ViewChild(MatSort) set matSort(ms: MatSort) {
    this.sort = ms;
    this.setDataSourceAttributes();
  }

  @ViewChild(MatPaginator) set matPaginator(mp: MatPaginator) {
    this.paginator = mp;
    this.setDataSourceAttributes();
  }

  setDataSourceAttributes() {
    if(this.loadingFlag == false){
      this.dataSource.paginator = this.paginator 
      this.dataSource.sort = this.sort;
    }
  }
  
  ngAfterContentInit(){
   
  
  }
  ngAfterViewInit() {
    //this.dataSource.paginator = this.paginator;
   // this.dataSource.sort = this.sort;
  }
  
    constructor(private route: ActivatedRoute, private UpgradecommandService: UpgradecommandService, private _snackBar: MatSnackBar ,private router: Router,public dialog: MatDialog,private apollo: Apollo) { }
  
    ngOnInit(): void {
    
      
      const source$ = this.apollo.query<DataQuery>({
        query: gql`
        {
          otherotapcommand {
              DeviceID
              DeviceType
              Customer
              NetworkProvider
              MobileNo
              Model
              VehicleTypeName
              CurrentCVersion
              CurrentJavaVersion
              Ignition
            }
        }`
        
      }).pipe(shareReplay(1))

 source$.pipe(map(result => result.data && result.data.otherotapcommand)).subscribe((data) =>   
   this.dataSource = new MatTableDataSource(data)
    );

   

    setTimeout(() =>{
      this.dataSource ? this.loadingFlag = false : this.loadingFlag = true;
           this.temp = this.dataSource.data.length;
           
    },1000)
          

   
    
          

    const source1$ = this.apollo.query<DataQuery1>({
      query: gql`
      {
        OtapCommand{
          Message
          Name
          DeviceID
          PacketID
        }
      }`
      
    }).pipe(shareReplay(1))

source1$.pipe(map(result => result.data && result.data.OtapCommand)).subscribe((data) =>   
 this.messages = data
  );

  this.route.params.subscribe(params => {
    this.deviceType = params['device'];
    console.log(this.deviceType)
  });

//   var val = ['n20','n21']
// for(let entry of val){
//   this.getCategory(entry)
// }


  // const source2$ = this.apollo.query<DataQuery>({
  //   query: gql`
  //     query otapcommand($DeviceID:String){
  //       otapcommand(DeviceID: $DeviceID){
  //         DeviceID,
  //         DeviceID
  //         DeviceType
  //         Customer
  //         NetworkProvider
  //         MobileNo
  //         Model
  //         VehicleTypeName
  //         CurrentCVersion
  //         CurrentJavaVersion
  //         Ignition
  //       }
  //     }  
  //   `,
  //   variables:{
  //     DeviceID: "n20"
  //   }
    
  // }).pipe(shareReplay(1))
  
  // source2$.pipe(map(result => result.data && result.data.otherotapcommand)).subscribe((data) => 
  // this.emp1 = data);
  
  
  
    }


    removeFunction(){
      const filterVal = "TAP66"
      this.dataSource.filter = filterVal.trim().toLocaleLowerCase() 
      console.log(this.dataSource)
    }
    public getCategory = (id) => {

      this.apollo.query({
        query: gql`
        query otapcommand($DeviceID:String){
          otapcommand(DeviceID: $DeviceID){
            DeviceID,
            DeviceID
            DeviceType
            Customer
            NetworkProvider
            MobileNo
            Model
            VehicleTypeName
            CurrentCVersion
            CurrentJavaVersion
            Ignition
          }
        }  
      `,
      variables:{
        DeviceID: id
      }
      }).subscribe(result => {
        this.dataSource1 = new MatTableDataSource(result.data['otapcommand'])
        this.dataSource1  ? this.loadingFlag1 = false : this.loadingFlag1 = true;
        // this.emp1 = result.data['otapcommand']
      })
    }
  
  
    applyFilter(event: Event) {
      const filterValue = (event.target as HTMLInputElement).value;
      this.dataSource.filter = filterValue.trim().toLowerCase();
    }
 
    applyFilter1(event: Event) {
      const filterValue = (event.target as HTMLInputElement).value;
      this.dataSource1.filter = filterValue.trim().toLowerCase();
    }
    ngAfterContentChecked()	{
      //setTimeout(() => this.dataSource.paginator = this.paginator);
    }
  
  
    changeTab(event) {
      console.log(this.id)
      this.tabIndex = event.index;
    }

    postMethod(files: FileList) {
      this.fileToUpload = files.item(0);
     
      if(this.fileToUpload != null){
        alert("FIle Successfully Uploaded")
      }
      }
      dash(){
        // this.router.navigate(['Firmware']);
        const filterVal = "n20"
        this.dataSource.filter = filterVal.trim().toLocaleLowerCase() 
        console.log(this.dataSource)
      }

      private isAllSelected() {
        const numSelected = this.selection.selected.length;
        const numRows = this.dataSource.data.length;
        return numSelected === numRows;
      }

      toggleRow(row: any, index: number) {
        this.selection.toggle(row);
        this.exporter.toggleRow(index);
        console.log(row)
        for (const [key, value] of Object.entries(row)) {
          if(key == "DeviceID"){
            this.device = value
            console.log(this.device)
          }
        }
      }


      addfile(files: FileList) {
        
    this.getCategory('n20')
        this.file = files.item(0);
        console.log(this.file.name)    
    let fileReader = new FileReader();    
    fileReader.readAsArrayBuffer(this.file);     
    fileReader.onload = (e) => {    
        this.arrayBuffer = fileReader.result;    
        var data = new Uint8Array(this.arrayBuffer);    
        var arr = new Array();    
        for(var i = 0; i != data.length; ++i) arr[i] = String.fromCharCode(data[i]);    
        var bstr = arr.join("");    
        var workbook = XLSX.read(bstr, {type:"binary"});    
        var first_sheet_name = workbook.SheetNames[0];    
        var worksheet = workbook.Sheets[first_sheet_name];    
        this.filelist = XLSX.utils.sheet_to_json(worksheet,{raw:true});    
        this.parseFile(this.filelist);
    }    
  }

  parseFile(fileData) {
    fileData.map(data=> {
      console.log(data)
      this.deviceArr.push(data['Device ID'])
     
    })

    this.getCategory('n20')
  }
      
      /** The label for the checkbox on the passed row */
      checkboxLabel(row?: any): string {
        if (!row) {
         
          return `${this.isAllSelected() ? 'select' : 'deselect'} all`;
          
        }
        return `${this.selection.isSelected(row) ? 'deselect' : 'select'} row ${row.position + 1}`;
      }
      

      listed(version){
        console.log(version)
        for (const [key, value] of Object.entries(version)) {

          if(key == "Message"){
            this.messageFormat = value
          }
          if(key == "Name"){
            this.messageName = value
          }

        }
      }

      PostData(){
        if(this.device == undefined || this.messageName == undefined)
        {
          this._snackBar.open("Select Command and CheckBox To Upgrade Command","",{duration: 5000});
        }
        if(this.device != undefined && this.messageName != undefined)
        {
          let objData = Object.assign({update: [{Device: this.device , DeviceID: 351431 , MessageFormat: this.messageFormat , FirmwareUpgradeEnum: 17 , IOTDevice: "" , MessageName: this.messageName , AppInstanceID: null , DeviceGateway: "TDMG" , UserID: 2739}]});
          console.log(objData)
          this.UpgradecommandService.PublishedVersion(objData).pipe().subscribe(data=>{
          console.log(data)
          this._snackBar.open(this.device + " Updated Successfully","",{duration: 5000});
          },
          (error) => this._snackBar.open("DeviceID Mismatch","",{duration: 5000})
          )
        }
      }
      

      AddCommand(): void {
        const dialogRef = this.dialog.open(addCommand, {
          width: '400px',
          data: { }
        });
    
       dialogRef.afterClosed().subscribe(result => {
          console.log('The dialog was closed');
 
        });

      }
  }



  @Component({
    selector: 'addCommand',
    templateUrl: 'addCommand.html',
  })
  export class addCommand {
    public deviceId;
    public packetId;
    public name;
    public message;
  
    constructor(private apollo: Apollo,private _snackBar: MatSnackBar ,
      public dialogRef: MatDialogRef<addCommand>,
      @Inject(MAT_DIALOG_DATA) public data: []) {}
  
    onNoClick(): void {
      this.dialogRef.close();
    }

    AddCommand(addCommandForm: NgForm){
      if(addCommandForm.valid){
        console.log(addCommandForm.value)

        this.apollo.mutate({
          mutation: UPVOTE_POST,
          variables: 
          {
            PacketID:this.packetId,
            DeviceID:this.deviceId,
            Name: this.name,
            Message: this.message
          }
        }).subscribe(({data }) => {
          this._snackBar.open("Value Uploaded Successfully","",{duration: 2000});
        },
        (error) => this._snackBar.open("DeviceID Not Found","",{duration: 2000})
        )
        

   
        
      }
      else{
        return
      }

    }
  
  }
  
  
