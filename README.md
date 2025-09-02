# file-diff

# 简约

## 常见使用场景

1. 文案修订核对：对比文章初版与编辑后的版本，确认修改是否符合需求；
2. 代码变更检查：比对同一代码文件的两个版本，查看新增 / 删除的函数、变量；
3. 文档更新追溯：核对产品说明书、接口文档的迭代版本，明确功能变更点。

粘贴文本（支持 TXT、Markdown、代码片段等格式），系统自动标红删除内容、标绿新增内容、标黄修改内容，差异处一目了然；

![image-20250902174633107](D:\Software\Typora\Typora picture\image-20250902174633107.png)

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

![image-20250902175027508](D:\Software\Typora\Typora picture\image-20250902175027508.png)
