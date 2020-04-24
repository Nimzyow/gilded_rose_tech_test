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
    test("normal item decreases by -2 if sellIn < 0", () => {
      const gildedRose = new Shop([new Item("foo", -1, 2)]);
      const items = gildedRose.updateQuality();
      expect(items[0].quality).toBe(0);
    });
    test("normal item can never be less than 0", () => {
      const gildedRose = new Shop([new Item("foo", -1, 1)]);
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
    test("backstage passes quality drops to 0 after concert", () => {
      const gildedRose = new Shop([new Item(BACKSTAGE_PASS, 0, 5)]);
      const items = gildedRose.updateQuality();
      expect(items[0].quality).toBe(0);
    });
  });

  describe("Sulfuras, Hand of Ragnaros's", () => {
    test("sellIn will not decrease", () => {
      const gildedRose = new Shop([new Item(SULFURAS, 5, 1)]);
      const items = gildedRose.updateQuality();
      expect(items[0].sellIn).toBe(5);
    });
    test("sellIn will not decrease but will decrease for all other items", () => {
      const gildedRose = new Shop([new Item(BACKSTAGE_PASS, 5, 1)]);
      const items = gildedRose.updateQuality();
      expect(items[0].sellIn).toBe(4);
    });
  });
});
