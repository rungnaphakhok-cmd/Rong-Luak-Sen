// ข้อมูลรายการอาหารทั้งหมด (34 เมนู)
const menuData = [
    // 1. โปรโมชัน (3 เมนู)
    { id: 1, name: "เซตคู่หูสุดคุ้ม: ก๋วยเตี๋ยวเรือ 2 ชาม + เกี๊ยวทอด", price: 129, category: "promo", isNoodle: true, img: "https://images.unsplash.com/photo-1569718212165-3a8278d5f624?auto=format&fit=crop&w=500&q=80", tag: "🔥 โปรสุดคุ้ม" },
    { id: 2, name: "เซตกะเพราถาด + ไข่ดาว 2 ฟอง + ชาเย็น 2 แก้ว", price: 159, category: "promo", isNoodle: false, img: "https://images.unsplash.com/photo-1589301760014-d929f3979dbc?auto=format&fit=crop&w=500&q=80", tag: "🔥 ขายดีประจำสัปดาห์" },
    { id: 3, name: "เซตข้าวซอยไก่ + แคบหมู + น้ำอัดลม", price: 119, category: "promo", isNoodle: false, img: "https://images.unsplash.com/photo-1555126634-323283e090fa?auto=format&fit=crop&w=500&q=80", tag: "🔥 โปรโมชันพิเศษ" },

    // 2. ก๋วยเตี๋ยวน้ำ (4 เมนู)
    { id: 4, name: "ก๋วยเตี๋ยวเรือน้ำตกหมูสด/หมูตุ๋น", price: 55, category: "soup", isNoodle: true, img: "https://images.unsplash.com/photo-1569718212165-3a8278d5f624?auto=format&fit=crop&w=500&q=80", tag: "เมนูแนะนำ" },
    { id: 5, name: "ก๋วยเตี๋ยวเรือน้ำตกเนื้อโพนยางคำ", price: 65, category: "soup", isNoodle: true, img: "https://images.unsplash.com/photo-1569718212165-3a8278d5f624?auto=format&fit=crop&w=500&q=80", tag: "เข้มข้น" },
    { id: 6, name: "ก๋วยเตี๋ยวต้มยำมะนาวสดหมูสับ", price: 60, category: "soup", isNoodle: true, img: "https://images.unsplash.com/photo-1555126634-323283e090fa?auto=format&fit=crop&w=500&q=80", tag: "แซ่บสดชื่น" },
    { id: 7, name: "ก๋วยเตี๋ยวน้ำใสหมูเด้งเกี๊ยวกรอบ", price: 50, category: "soup", isNoodle: true, img: "https://images.unsplash.com/photo-1569718212165-3a8278d5f624?auto=format&fit=crop&w=500&q=80", tag: "เด็กทานได้" },

    // 3. ก๋วยเตี๋ยวแห้ง (5 เมนู)
    { id: 8, name: "บะหมี่แห้งยำโบราณทรงเครื่อง", price: 60, category: "dry", isNoodle: true, img: "https://images.unsplash.com/photo-1555126634-323283e090fa?auto=format&fit=crop&w=500&q=80", tag: "ยอดนิยม" },
    { id: 9, name: "ก๋วยเตี๋ยวเรือแห้งซีอิ๊วดำหมูตุ๋น", price: 55, category: "dry", isNoodle: true, img: "https://images.unsplash.com/photo-1569718212165-3a8278d5f624?auto=format&fit=crop&w=500&q=80", tag: "กลมกล่อม" },
    { id: 10, name: "ก๋วยเตี๋ยวแห้งต้มยำไข่มะตอย", price: 65, category: "dry", isNoodle: true, img: "https://images.unsplash.com/photo-1555126634-323283e090fa?auto=format&fit=crop&w=500&q=80", tag: "เด็ดมาก" },
    { id: 11, name: "เส้นใหญ่แห้งเนื้อเปื่อยชิ้นสด", price: 70, category: "dry", isNoodle: true, img: "https://images.unsplash.com/photo-1569718212165-3a8278d5f624?auto=format&fit=crop&w=500&q=80", tag: "เนื้อนุ่ม" },
    { id: 12, name: "วุ้นเส้นแห้งต้มยำทะเล", price: 75, category: "dry", isNoodle: true, img: "https://images.unsplash.com/photo-1555126634-323283e090fa?auto=format&fit=crop&w=500&q=80", tag: "กุ้งหมึกแน่น" },

    // 4. ข้าวซอย (3 เมนู)
    { id: 13, name: "ข้าวซอยไก่น่องโตสูตรเหนือ", price: 70, category: "khao-soi", isNoodle: false, img: "https://images.unsplash.com/photo-1555126634-323283e090fa?auto=format&fit=crop&w=500&q=80", tag: "สูตรเชียงใหม่" },
    { id: 14, name: "ข้าวซอยเนื้อน่องลายตุ๋น", price: 85, category: "khao-soi", isNoodle: false, img: "https://images.unsplash.com/photo-1555126634-323283e090fa?auto=format&fit=crop&w=500&q=80", tag: "เนื้อลายเข้มข้น" },
    { id: 15, name: "ข้าวซอยหมูกรอบทรงเครื่อง", price: 80, category: "khao-soi", isNoodle: false, img: "https://images.unsplash.com/photo-1555126634-323283e090fa?auto=format&fit=crop&w=500&q=80", tag: "หมูกรอบเด็ด" },

    // 5. ข้าวขาหมู (3 เมนู)
    { id: 16, name: "ข้าวขาหมูเนื้อหนัง+ไข่ต้ม", price: 65, category: "pork-leg", isNoodle: false, img: "https://images.unsplash.com/photo-1541529086526-db283c563270?auto=format&fit=crop&w=500&q=80", tag: "ตุ๋นเข้าเนื้อ" },
    { id: 17, name: "ข้าวคาคากิ (คากิล้วนละลายในปาก)", price: 75, category: "pork-leg", isNoodle: false, img: "https://images.unsplash.com/photo-1541529086526-db283c563270?auto=format&fit=crop&w=500&q=80", tag: "เอ็นหนุ่ม" },
    { id: 18, name: "ข้าวขาหมูกรอบราดซอสฉ่ำ", price: 75, category: "pork-leg", isNoodle: false, img: "https://images.unsplash.com/photo-1541529086526-db283c563270?auto=format&fit=crop&w=500&q=80", tag: "เมนูประยุกต์" },

    // 6. ผัดกะเพรา (8 เมนู)
    { id: 19, name: "ผัดกะเพราหมูสับแท้ (ไม่ใส่ผักอื่น)", price: 55, category: "kaprao", isNoodle: false, img: "https://images.unsplash.com/photo-1589301760014-d929f3979dbc?auto=format&fit=crop&w=500&q=80", tag: "ดั้งเดิม" },
    { id: 20, name: "ผัดกะเพราหมูกรอบพริกแห้ง", price: 65, category: "kaprao", isNoodle: false, img: "https://images.unsplash.com/photo-1589301760014-d929f3979dbc?auto=format&fit=crop&w=500&q=80", tag: "ยอดฮิต" },
    { id: 21, name: "ผัดกะเพราเนื้อสับพริกสดจัดจ้าน", price: 70, category: "kaprao", isNoodle: false, img: "https://images.unsplash.com/photo-1589301760014-d929f3979dbc?auto=format&fit=crop&w=500&q=80", tag: "รสจัด" },
    { id: 22, name: "ผัดกะเพราไก่ชิ้นเนื้อนุ่ม", price: 55, category: "kaprao", isNoodle: false, img: "https://images.unsplash.com/photo-1589301760014-d929f3979dbc?auto=format&fit=crop&w=500&q=80", tag: "อร่อยเบาๆ" },
    { id: 23, name: "ผัดกะเพราทะเลรวมมิตร (กุ้ง+หมึก)", price: 80, category: "kaprao", isNoodle: false, img: "https://images.unsplash.com/photo-1589301760014-d929f3979dbc?auto=format&fit=crop&w=500&q=80", tag: "สดจากทะเล" },
    { id: 24, name: "ผัดกะเพราขาหมูตุ๋นราดข้าว", price: 70, category: "kaprao", isNoodle: false, img: "https://images.unsplash.com/photo-1589301760014-d929f3979dbc?auto=format&fit=crop&w=500&q=80", tag: "หอมนุ่ม" },
    { id: 25, name: "ผัดกะเพราไข่เยี่ยวม้าหมูสับ", price: 65, category: "kaprao", isNoodle: false, img: "https://images.unsplash.com/photo-1589301760014-d929f3979dbc?auto=format&fit=crop&w=500&q=80", tag: "กลมกล่อม" },
    { id: 26, name: "ผัดกะเพราเต้าหู้หมูสับ (มังสวิรัติได้)", price: 55, category: "kaprao", isNoodle: false, img: "https://images.unsplash.com/photo-1589301760014-d929f3979dbc?auto=format&fit=crop&w=500&q=80", tag: "สุขภาพ" },

    // 7. กับข้าว (3 เมนู)
    { id: 27, name: "กับข้าว: ต้มแซ่บกระดูกหมูอ่อน", price: 120, category: "kubkhao", isNoodle: false, img: "https://images.unsplash.com/photo-1541529086526-db283c563270?auto=format&fit=crop&w=500&q=80", tag: "แซ่บนัว" },
    { id: 28, name: "กับข้าว: ขาหมูเนื้อหนังจานใหญ่", price: 150, category: "kubkhao", isNoodle: false, img: "https://images.unsplash.com/photo-1541529086526-db283c563270?auto=format&fit=crop&w=500&q=80", tag: "ทานได้ 2-3 คน" },
    { id: 29, name: "กับข้าว: ผัดกะเพราหมูกรอบจานเปล", price: 140, category: "kubkhao", isNoodle: false, img: "https://images.unsplash.com/photo-1589301760014-d929f3979dbc?auto=format&fit=crop&w=500&q=80", tag: "จุใจ" },

    // 8. ขนมและเครื่องดื่ม (5 เมนู)
    { id: 30, name: "เฉาก๊วยชากังราวโบราณนมสด", price: 30, category: "dessert-drink", isNoodle: false, img: "https://images.unsplash.com/photo-1513558161293-cdaf765ed2fd?auto=format&fit=crop&w=500&q=80", tag: "หวานเย็น" },
    { id: 31, name: "ขนมถ้วยโบราณ (คู่ละ)", price: 20, category: "dessert-drink", isNoodle: false, img: "https://images.unsplash.com/photo-1513558161293-cdaf765ed2fd?auto=format&fit=crop&w=500&q=80", tag: "กะทิหอม" },
    { id: 32, name: "ชาไทยเย็นสูตรเข้มข้น", price: 25, category: "dessert-drink", isNoodle: false, img: "https://images.unsplash.com/photo-1513558161293-cdaf765ed2fd?auto=format&fit=crop&w=500&q=80", tag: "ชงสด" },
    { id: 33, name: "น้ำโอเลี้ยงโบราณ / ชาดำเย็น", price: 20, category: "dessert-drink", isNoodle: false, img: "https://images.unsplash.com/photo-1513558161293-cdaf765ed2fd?auto=format&fit=crop&w=500&q=80", tag: "สดชื่น" },
    { id: 34, name: "น้ำอัดลม + น้ำแข็งแก้ว", price: 20, category: "dessert-drink", isNoodle: false, img: "https://images.unsplash.com/photo-1513558161293-cdaf765ed2fd?auto=format&fit=crop&w=500&q=80", tag: "ดับกระหาย" }
];

let cart = [];
let selectedMenu = null;

// แสดงผลเมนูทั้งหมดเมื่อโหลดหน้าเว็บ
document.addEventListener("DOMContentLoaded", () => {
    renderMenu(menuData);
});

// ฟังก์ชันสร้าง Card เมนู
function renderMenu(items) {
    const grid = document.getElementById("menu-grid");
    grid.innerHTML = "";

    if (items.length === 0) {
        grid.innerHTML = `<p class="col-span-full text-center text-gray-500 py-8">ไม่พบเมนูอาหารที่ค้นหา...</p>`;
        return;
    }

    items.forEach(item => {
        const card = document.createElement("div");
        card.className = "bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg transition flex flex-col justify-between";
        card.innerHTML = `
            <div>
                <img src="${item.img}" alt="${item.name}" class="w-full h-40 object-cover">
                <div class="p-4">
                    <span class="bg-red-100 text-red-800 text-xs px-2 py-0.5 rounded font-semibold">${item.tag}</span>
                    <h3 class="text-base font-bold mt-2 text-gray-800 leading-snug">${item.name}</h3>
                </div>
            </div>
            <div class="p-4 pt-0 flex justify-between items-center mt-2">
                <span class="text-lg font-bold text-red-700">${item.price} ฿</span>
                <button onclick="openCustomModal(${item.id})" class="bg-red-700 hover:bg-red-800 text-white text-sm px-3 py-1.5 rounded-lg transition shadow">
                    + เลือก
                </button>
            </div>
        `;
        grid.appendChild(card);
    });
}

// ระบบกรองหมวดหมู่
function filterMenu(category) {
    const buttons = document.querySelectorAll(".tab-btn");
    buttons.forEach(btn => {
        btn.classList.remove("bg-red-800", "text-white");
        btn.classList.add("bg-white", "text-gray-800");
    });
    event.currentTarget.classList.remove("bg-white", "text-gray-800");
    event.currentTarget.classList.add("bg-red-800", "text-white");

    if (category === "all") {
        renderMenu(menuData);
    } else {
        const filtered = menuData.filter(item => item.category === category);
        renderMenu(filtered);
    }
}

// ระบบค้นหาเมนูอาหาร (Search)
function searchMenu() {
    const keyword = document.getElementById("search-input").value.toLowerCase();
    const filtered = menuData.filter(item => item.name.toLowerCase().includes(keyword));
    renderMenu(filtered);
}

// เปิด Modal เลือกออปชัน (เส้น, ความเผ็ด, ท็อปปิ้ง)
function openCustomModal(id) {
    selectedMenu = menuData.find(item => item.id === id);
    document.getElementById("modal-title").innerText = selectedMenu.name;
    document.getElementById("modal-price").innerText = `${selectedMenu.price} ฿`;

    // ซ่อน/แสดง ตัวเลือกเส้นตามประเภทอาหาร
    const noodleGroup = document.getElementById("noodle-options-group");
    if (selectedMenu.isNoodle) {
        noodleGroup.classList.remove("hidden");
    } else {
        noodleGroup.classList.add("hidden");
    }

    // ล้างค่า Checkbox
    document.querySelectorAll('.topping-cb').forEach(cb => cb.checked = false);

    document.getElementById("custom-modal").classList.remove("hidden");
}

function closeCustomModal() {
    document.getElementById("custom-modal").classList.add("hidden");
}

// ยืนยันการเพิ่มลงตะกร้า
function confirmAddToCart() {
    let noodleType = "";
    let extraPrice = 0;

    if (selectedMenu.isNoodle) {
        noodleType = document.getElementById("select-noodle").value;
        if (noodleType === "มาม่า") extraPrice += 5;
    }

    // ดึงค่าความเผ็ด
    const spicyRadios = document.getElementsByName("spicy");
    let spicyLevel = "เผ็ดปกติ";
    for (const r of spicyRadios) {
        if (r.checked) {
            spicyLevel = r.value;
            break;
        }
    }

    // ดึงค่าท็อปปิ้ง
    let selectedToppings = [];
    const toppingCBs = document.querySelectorAll('.topping-cb:checked');
    toppingCBs.forEach(cb => {
        selectedToppings.push(cb.value);
        extraPrice += parseInt(cb.getAttribute('data-price'));
    });

    const cartItem = {
        cartId: Date.now(),
        name: selectedMenu.name,
        basePrice: selectedMenu.price,
        totalPrice: selectedMenu.price + extraPrice,
        noodle: noodleType,
        spicy: spicyLevel,
        toppings: selectedToppings
    };

    cart.push(cartItem);
    updateCartUI();
    closeCustomModal();
}

// อัปเดตตะกร้าสินค้า
function updateCartUI() {
    document.getElementById("cart-count").innerText = cart.length;
    const cartItemsContainer = document.getElementById("cart-items");
    cartItemsContainer.innerHTML = "";

    let total = 0;

    if (cart.length === 0) {
        cartItemsContainer.innerHTML = `<p class="text-center text-gray-400 py-6">ไม่มีสินค้าในตะกร้า</p>`;
    } else {
        cart.forEach((item, index) => {
            total += item.totalPrice;
            const div = document.createElement("div");
            div.className = "flex justify-between items-start bg-amber-50 p-3 rounded-xl border border-amber-200 text-sm";
            div.innerHTML = `
                <div>
                    <p class="font-bold text-gray-800">${item.name}</p>
                    <p class="text-xs text-gray-500">
                        ${item.noodle ? 'เส้น: ' + item.noodle + ' | ' : ''}
                        เผ็ด: ${item.spicy}
                        ${item.toppings.length > 0 ? '<br>เพิ่ม: ' + item.toppings.join(', ') : ''}
                    </p>
                    <p class="font-bold text-red-700 mt-1">${item.totalPrice} ฿</p>
                </div>
                <button onclick="removeFromCart(${item.cartId})" class="text-red-500 hover:text-red-700 font-bold px-2 py-1">✕</button>
            `;
            cartItemsContainer.appendChild(div);
        });
    }

    document.getElementById("cart-total").innerText = `${total} ฿`;
}

function removeFromCart(cartId) {
    cart = cart.filter(item => item.cartId !== cartId);
    updateCartUI();
}

function toggleCartModal() {
    document.getElementById("cart-modal").classList.toggle("hidden");
}

// ปุ่มเปิดไปที่แอป LINE MAN
function orderViaLineMan() {
    if (cart.length === 0) {
        alert("กรุณาเลือกเมนูอาหารลงตะกร้าก่อนสั่งซื้อครับ");
        return;
    }

    // ลิงก์ Deep Link สำหรับเปิดแอป LINE MAN
    const lineManUrl = "https://lineman.line.me/"; 
    window.open(lineManUrl, '_blank');
}
