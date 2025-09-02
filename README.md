# file-diff

# 简约

## 常见使用场景

1. 文案修订核对：对比文章初版与编辑后的版本，确认修改是否符合需求；
2. 代码变更检查：比对同一代码文件的两个版本，查看新增 / 删除的函数、变量；
3. 文档更新追溯：核对产品说明书、接口文档的迭代版本，明确功能变更点。

粘贴文本（支持 TXT、Markdown、代码片段等格式），系统自动标红删除内容、标绿新增内容、标黄修改内容，差异处一目了然；
<img width="2217" height="1245" alt="image" src="https://github.com/user-attachments/assets/26779343-0a4d-44de-bb70-757a01977700" />



# 部署流程

```apl
[root@server file-diff]# tree
.
├── docker-compose.yml
├── Dockerfile
└── frontend
    ├── css
    │?? └── style.css
    ├── index.html
    └── js
        └── app.js

3 directories, 5 files
[root@server file-diff]# 
[root@server file-diff]# docker-compose up -d
```
<img width="1617" height="738" alt="image" src="https://github.com/user-attachments/assets/85db4a4f-4f4b-470b-86ec-c2d139f073fc" />


