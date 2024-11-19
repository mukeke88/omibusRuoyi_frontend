import request from '@/utils/request'

// 查询公告列表
export function listActivity(query) {
  return request({
    url: '/mk-activity/get-activities',
    method: 'get',
    params: query
  })
}
