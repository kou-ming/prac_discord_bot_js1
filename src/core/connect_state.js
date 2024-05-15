const mongoose = require('mongoose');

export const check_state = () => {
    // 確認連線狀態
    const connectionState = mongoose.connection.readyState;

    switch (connectionState) {
        case 0:
            console.log('未連接');
            break;
        case 1:
            console.log('正在連接');
            break;
        case 2:
            console.log('已連接');
            break;
        case 3:
            console.log('斷開連接');
            break;
        default:
            console.log('未知狀態');
    }
}