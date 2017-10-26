import { Component } from '@angular/core';

import { DialogService } from "ngx-bootstrap-modal";


@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css']
})
export class AppComponent {
    public username:string
    public age:string
    public nowIndex:number
    public userData:any = [
        {username: "苏子晨",age: "18"}
    ]
    constructor(
        public dialogService:DialogService
    ) {}

    add() {
        this.userData.push({
            username: this.username,
            age: this.age
        })
        this.username = '';
        this.age = '';
        console.log(this.userData)
    }
    
    showConfirm() {
        this.dialogService.confirm('提醒', '确认要删除吗？', {
            // 可选项，可以对部分参数重写
            confirmButtonClass: "btn-danger",
            cancelButtonClass: "btn-primary"
        }).then((result: boolean) => {
            // result
            if(result === false) return;
            this.username = "haha"
            this.age = "safsa"
        });
    }
}
