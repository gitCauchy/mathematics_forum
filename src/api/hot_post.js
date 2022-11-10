import {request} from "@/network/request";

export function getTop20HotPost() {
    return request({
        url: '/api/post/getTop20HotPost',
        method: 'get',
    })
}

export function addLike(postId) {
    return request({
        url: '/api/post/addLike',
        method: 'get',
        params:{
            postId
        }
    })
}