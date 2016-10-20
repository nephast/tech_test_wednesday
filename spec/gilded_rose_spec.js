describe("Gilded Rose", function() {

  it("should return the name of the item", function() {
    items = [ new Item("foo", 0, 0) ];
    update_quality();
    expect(items[0].name).toEqual("foo");
  });

  it("The Quality of an item is never more than 50", function() {
    items = [ new Item("Aged Brie", 0, 50) ];
    update_quality();
    expect(items[0].quality).toEqual(50);
  });

  it("The Quality of an item is never negative", function() {
    items = [ new Item("foo", 0, 0) ];
    update_quality();
    expect(items[0].quality).toEqual(0);
  });

  it("quality should go twice as fast once sell by date has gone", function() {
    items = [ new Item("foo", 0, 10) ];
    update_quality();
    expect(items[0].quality).toEqual(8);
  });

  it("'Aged Brie' actually increases in Quality the older it gets", function() {
    items = [ new Item("Aged Brie", 1, 40) ];
    update_quality();
    expect(items[0].quality).toEqual(41);
  });

  it("Aged brie quality goes up twice as fast when sell in date is passed", function() {
    items = [ new Item("Aged Brie", 0, 40) ];
    update_quality();
    expect(items[0].quality).toEqual(42);
  });

  it("Once the sell by date has passed, Quality degrades twice as fast", function() {
    items = [ new Item("foo", 0, 40) ];
    update_quality();
    expect(items[0].quality).toEqual(38);
  });

  it("'Sulfuras', being a legendary item, never has to be sold or decreases in Quality", function() {
    items = [ new Item("Sulfuras, Hand of Ragnaros", 10, 15) ];
    update_quality();
    expect(items[0].quality).toEqual(15);
  });

  it("backstage quality increases by 2 when there are 10 days or less", function() {
    items = [ new Item("Backstage passes to a TAFKAL80ETC concert", 9, 15) ];
    update_quality();
    expect(items[0].quality).toEqual(17);
  });



});
