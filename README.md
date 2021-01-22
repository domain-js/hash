# @domain.js/hash

[![Build status](https://travis-ci.com/domain-js/hash.svg?branch=master)](https://travis-ci.org/domain-js/hash)
[![codecov](https://codecov.io/gh/domain-js/hash/branch/master/graph/badge.svg)](https://codecov.io/gh/domain-js/hash)

# Installation
<pre>npm i @domain.js/hash --save</pre>

# cnf
专属配置名称 `hash`
| 名称 | 类型 | 必填 | 默认值 | 描述 | 样例 |
| ---- | ---- | ---- | ------ | ---- | ---- |
| key  | string | `是` | `无` | hash 在redis里存储的 key 名称 | hashs |

# deps
| 模块名 | 别名 | 用到的方法 | 描述 |
| ------ | ---- | ---------- | ---- |
| redis  | `无` | hget, hset, hdel | 本质上是包裹了一下 redis.hash 相关的操作 |


# Usage
| 功能 | 描述 | 样例 |
| ---- | ---- | ---- |
| get | 读取一个 key | await hash.get('name') |
| set | 设置一个 key | await hash.set('name', 'Redstone') |
| del | 删除一个 key | await hash.del('name') |
