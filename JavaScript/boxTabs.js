class Tab {
    constructor(element) {
        this.element = element;
        this.tabData = this.element.dataset.tab;

        if(this.tabdata === "all") {
            this.box = document.querySelectorAll(".box")
        } else {
            this.box = document.querySelectorAll(`.box[data-tab = '${this.tabData}']`);
        }

        this.box = Array.from(this.box).map(card => new TabData((card)));

        this.element.addEventListener("click", () => {
            this.selectTab();
        })
    }


selectTab() {
    const tab = document.querySelectorAll(".tab");
    tab.forEach(tab => {
        tab.classList.remove("activeTab")
    });

    const box = document.querySelectorAll(".box");
    box.forEach(box => {
        box.style.display = "none";
    })

    this.element.classList.add("activeTab");

    this.box.forEach(box => box.selectBox());

    }
}

class TabData {
    constructor(boxElement) {
        this.boxElement = boxElement;
    }
    selectBox() {
        this.boxElement.style.display = "flex";
    }
}



const tabs = document.querySelectorAll(".tab");
tabs.forEach(tab => {
    return new Tab(tab);
})