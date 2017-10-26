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
        {username: "Angular",age: "4.X"}
    ]
    constructor(
        public dialogService:DialogService
    ) {}

    add() {
        if(!this.username || !this.age) return;
        this.userData.push({
            username: this.username,
            age: this.age
        })
        this.username = '';
        this.age = '';
    }
    
    delete() {
        if(this.nowIndex === -1) {
            this.userData = [];
        } else {
            this.userData.splice(this.nowIndex, 1)
        }
    }

    showConfirm() {
        this.dialogService.confirm('提醒', '确认要删除吗？', {
            // 可选项，可以对部分参数重写
            confirmButtonClass: "btn-danger",
            cancelButtonClass: "btn-primary"
        }).then((result: boolean) => {
            // result
            if(result === false) return;
            this.delete();
        });
    }
}
