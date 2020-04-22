const { Shop, Item } = require("../src/gilded_rose");
const BACKSTAGE_PASS = "Backstage passes to a TAFKAL80ETC concert";
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
});
