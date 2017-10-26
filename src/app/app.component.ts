import { Component } from '@angular/core';

import { DialogService } from "ngx-bootstrap-modal";


@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css']
})
export class AppComponent {
    constructor(
        public dialogService:DialogService
    ) {}

    showConfirm() {
        this.dialogService.confirm('提醒', '确认要删除吗？', {
            // 可选项，可以对部分参数重写
        }).then((result: boolean) => {
            // result
        });
    }
}
