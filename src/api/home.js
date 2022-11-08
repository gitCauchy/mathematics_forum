import {request} from "@/network/request";

export function getTop20HotPost() {
    return request({
        url: 'post/getTop20HotPost',
        method: 'get',
    })
}