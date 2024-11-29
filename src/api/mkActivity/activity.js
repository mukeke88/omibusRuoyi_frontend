import request from '@/utils/request'

// 查询行为列表
export function listActivity(query) {
  return request({
    url: '/mk-activity/get-activities',
    method: 'get',
    params: query
  })
}

export function getActivity(id) {
  return request({
    url: `/mk-activity/${id}`,
    method: 'get'
  })
}

export function addActivity(data) {
  return request({
    url: '/mk-activity',
    method: 'post',
    data: data
  })
}

export function updateActivity(data) {
  return request({
    url: '/mk-activity',
    method: 'put',
    data: data
  })
}

export function deleteActivities(ids) {
  return request({
    url: `/mk-activity`,
    method: 'delete',
    data: ids // Sending array in request body
  });
}