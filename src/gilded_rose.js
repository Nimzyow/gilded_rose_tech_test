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
      let itemName = this.items[i].name;
      let item = this.items[i];
      if (itemName != AGED_BRIE && itemName != BACKSTAGE_PASS) {
        this.decreaseQualityOfNormalItem(item);
      } else {
        this.qualityCheck(item);
      }
      this.decreaseSellInValue(item);
      this.checkForQualityOfSellInNegativeItem(item);
    }
    return this.items;
  }

  qualityCheck(item) {
    this.increaseQualityOfItem(item);
    this.checkForQualityOfBackStagePass(item);
  }

  checkForQualityOfSellInNegativeItem(item) {
    if (item.sellIn < 0) {
      if (item.name != AGED_BRIE && item.name != BACKSTAGE_PASS) {
        this.decreaseQualityOfNormalItem(item);
        this.decreaseQualityOfNormalItem(item);
      } else {
        this.invalidateQualityOfBackstagePass(item);
      }
    }
  }

  increaseQualityOfItem(item) {
    if (item.quality < 50) {
      item.quality += 1;
    }
  }

  invalidateQualityOfBackstagePass(item) {
    if (item.name == BACKSTAGE_PASS) {
      item.quality = 0;
    } else {
      this.increaseQualityOfItem(item);
    }
  }

  decreaseQualityOfNormalItem(item) {
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

  decreaseSellInValue(item) {
    if (item.name != SULFURAS) {
      item.sellIn -= 1;
    }
  }
}

module.exports = {
  Item,
  Shop,
};
