const Mock = require('mockjs');
const Random = Mock.Random;

Mock.Random.extend({
  customName: function() {
    return Random.cname();
  },
  location: function() {
    return Random.province() + Random.city() + Random.county();
  },
  rangeInt: function() {
    return Random.integer(0, 4);
  },
  description() {
    return Random.paragraph(20, 100);
  },
  profile: function() {
    const photos = Mock.mock({
      'list|3-10': [
        {
          url: Random.image('200x100', Random.color(), Random.paragraph(4)),
          name: Random.sentence(5, 10)
        }
      ]
    }).list;
    // 将数组转成字符串
    return JSON.stringify(photos);
  },
  age: function() {
    return Random.integer(18, 100);
  },
  gender: function() {
    return Random.integer(0, 1);
  },
  myurl: function() {
    return Random.url('http')
  },
  income: function() {
    return Random.integer(20000, 40000);
  },
  subgrids: function() {
    return Mock.mock({
      'list|3-10': [
        {
          name: Random.cname(),
          gender: Random.integer(0, 1),
          age: Random.integer(18, 100),
          email: Random.email(),
          status: Random.integer(0, 4)
        }
      ]
    }).list;
  }
});

function bulkCreate() {
  return {
    data: Mock.mock({
      'list|20': [
        {
          name: '@customName',
          gender: '@gender',
          age: '@age',
          email: '@email',
          hobby: '@word',
          status: '@rangeInt',
          photos: '@profile',
          profession: '@word',
          education: '@rangeint',
          income: '@income',
          marriaged: '@boolean',
          description: '@description',
          hometown: '@location',
          address: '@location',
          homePage: '@myurl',
        }
      ]
    }).list
  }
}

function eachCreate() {
  return Mock.mock({
    name: '@customName',
    gender: '@gender',
    age: '@age',
    email: '@email',
    hobby: '@word',
    status: '@rangeInt',
    photos: '@profile',
    profession: '@word',
    education: '@rangeint',
    income: '@income',
    marriaged: '@boolean',
    description: '@description',
    hometown: '@location',
    address: '@location',
    homePage: '@myurl',
    subgrids: '@subgrids'
  });
}

function bulkSugrid() {
  return {
    data: Mock.mock({
      'list|5-10': [
        {
          name: '@customName',
          gender: '@gender',
          age: '@age',
          email: '@email',
          status: '@rangeInt'
        }
      ]
    }).list
  }
}

function eachSugrid() {
  return Mock.mock({
    name: '@customName',
    gender: '@gender',
    age: '@age',
    email: '@email',
    status: '@rangeInt'
  });
}

module.exports = {
  bulkCreate,
  eachCreate,
  bulkSugrid,
  eachSugrid
};
