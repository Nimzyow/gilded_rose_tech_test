const { AGED_BRIE, BACKSTAGE_PASS, SULFURAS } = require("../Types");

class Item {
  constructor(name, sellIn, quality) {
    this.name = name;
    this.sellIn = sellIn;
    this.quality = quality;
  }
}

class Shop {
  constructor(items = []) {
    this.items = items;
  }
  updateQuality() {
    for (let i = 0; i < this.items.length; i++) {
      if (
        this.items[i].name != AGED_BRIE &&
        this.items[i].name != BACKSTAGE_PASS
      ) {
        this.checkForQualityOfNormalItem(this.items[i]);
      } else if (this.items[i].quality < 50) {
        this.increaseQualityOfItem(this.items[i]);
        this.checkForQualityOfBackStagePass(this.items[i]);
      }
      this.decreaseSellInValue(this.items[i]);
      if (this.items[i].sellIn < 0) {
        if (
          this.items[i].name != AGED_BRIE &&
          this.items[i].name != BACKSTAGE_PASS
        ) {
          if (this.items[i].quality > 0) {
            this.descreaseQualityOfNormalItem(this.items[i]);
          } else {
            this.items[i].quality =
              this.items[i].quality - this.items[i].quality;
          }
        } else {
          if (
            this.items[i].name == BACKSTAGE_PASS &&
            this.items[i].sellIn <= 0
          ) {
            this.items[i].quality = 0;
          } else {
            if (this.items[i].quality < 50) {
              this.items[i].quality += 1;
            }
          }
        }
      }
    }

    return this.items;
  }

  checkForQualityOfNormalItem(item) {
    if (item.quality > 0 && item.name != SULFURAS) {
      item.quality -= 1;
    }
  }

  checkForQualityOfBackStagePass(item) {
    if (item.name == BACKSTAGE_PASS && item.quality < 50) {
      if (item.sellIn >= 6 && item.sellIn < 11) {
        item.quality += 1;
      } else if (item.sellIn < 6) {
        item.quality += 2;
      }
    }
  }

  increaseQualityOfItem(item) {
    item.quality += 1;
  }

  decreaseSellInValue(item) {
    if (item.name != SULFURAS) {
      item.sellIn -= 1;
    }
  }
  descreaseQualityOfNormalItem(item) {
    if (item.name != SULFURAS) {
      item.quality -= 1;
    }
  }
}

module.exports = {
  Item,
  Shop,
};
