// 用于模拟收集表单信息
// 完整功能还没做好遂使用此方法  :(


// 表单提交处理
document.addEventListener('DOMContentLoaded', function() {
    // 获取表单元素
    const form = document.getElementById('consultationForm');

    // 添加表单提交事件监听器
    form.addEventListener('submit', function(event) {
        // 阻止表单的默认提交行为
        event.preventDefault();

        // 显示成功提交的提示
        showSuccessMessage();

        // 清空表单
        form.reset();
    });
});

// 显示成功消息的函数
function showSuccessMessage() {
    const successMessage = document.createElement('div');
    successMessage.className = 'success-message';
    successMessage.textContent = '信息已提交';

    // 将成功消息添加到表单上方
    const form = document.getElementById('consultationForm');
    form.parentNode.insertBefore(successMessage, form);

    // 设置成功消息的样式
    successMessage.style.color = 'green';
    successMessage.style.padding = '10px';
    successMessage.style.marginBottom = '20px';
    successMessage.style.border = '1px solid #4CAF50';
    successMessage.style.borderRadius = '5px';

    // 几秒钟后自动隐藏成功消息
    setTimeout(function() {
        successMessage.style.display = 'none';
    }, 3000);
}

// 查看按钮点击事件
document.addEventListener('DOMContentLoaded', function() {
    // 获取所有“查看”按钮
    const viewButtons = document.querySelectorAll('.cart-btn');

    // 为每个“查看”按钮添加点击事件监听器
    viewButtons.forEach(function(button) {
        button.addEventListener('click', function(event) {
            event.preventDefault(); // 阻止默认行为

            // 获取商品ID
            const productId = this.getAttribute('data-id');

            // 跳转到详情页并传递商品ID
            if (productId) {
                window.location.href = `details.html?id=${productId}`;
            }
        });
    });
});