const { Shop, Item } = require("../src/gilded_rose");
const { AGED_BRIE, BACKSTAGE_PASS, SULFURAS } = require("../Types");
describe("Gilded Rose", function () {
  it("should foo", function () {
    const gildedRose = new Shop([new Item("foo", 0, 0)]);
    const items = gildedRose.updateQuality();
    expect(items[0].name).toBe("foo");
  });

  describe("quality of", () => {
    test("normal item decreases by -1", () => {
      const gildedRose = new Shop([new Item("foo", 1, 1)]);
      const items = gildedRose.updateQuality();
      expect(items[0].quality).toBe(0);
    });
    test("backstage passes quality increases by 2 to equal 3", () => {
      const gildedRose = new Shop([new Item(BACKSTAGE_PASS, 10, 1)]);
      const items = gildedRose.updateQuality();
      expect(items[0].quality).toBe(3);
    });
    test("backstage passes quality increases by 3 to equal 4", () => {
      const gildedRose = new Shop([new Item(BACKSTAGE_PASS, 5, 1)]);
      const items = gildedRose.updateQuality();
      expect(items[0].quality).toBe(4);
    });
  });
  describe("all items except for Sulfuras, Hand of Ragnaros will decrease sellIn by 1", () => {
    const gildedRose = new Shop([new Item(BACKSTAGE_PASS, 5, 1)]);
    const items = gildedRose.updateQuality();
    expect(items[0].sellIn).toBe(4);
  });
  describe("Sulfuras, Hand of Ragnaros's sellIn will not decrease", () => {
    const gildedRose = new Shop([new Item(SULFURAS, 5, 1)]);
    const items = gildedRose.updateQuality();
    expect(items[0].sellIn).toBe(5);
  });
});
