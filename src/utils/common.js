//

class Utility{

  constructor(driver){
    this.driver = driver;
  }

  async performSwipe(directions) {
    const startPercentage = 90
    const endPercentage = 10
    const anchorPercentage = 50

    const { width, height } = await this.driver.getWindowSize()
    const density = (await this.driver.getDisplayDensity()) / 100
    const anchor = (width * anchorPercentage) / 100
    const startPoint = (height * startPercentage) / 100
    const endPoint = (height * endPercentage) / 100
    let swipeCalculation = [];
    switch(directions){
      case 'down':
        swipeCalculation = [{
          type: 'pointer',
          id: 'finger1',
          parameters: { pointerType: 'touch' },
          actions: [
            { type: 'pointerMove', duration: 0, x: anchor, y: startPoint },
            { type: 'pointerDown', button: 0 },
            { type: 'pause', duration: 500 },
            { type: 'pointerMove', duration: 500, x: 0, y: -endPoint * density },
            { type: 'pointerUp', button: 0 },
            { type: 'pause', duration: 500}
          ]
      }]
        break;
      case 'up':
        swipeCalculation = [{
          type: 'pointer',
          id: 'finger1',
          parameters: { pointerType: 'touch' },
          actions: [
            { type: 'pointerMove', duration: 0, x: anchor, y: endPoint },
            { type: 'pointerDown', button: 0 },
            { type: 'pause', duration: 500 },
            { type: 'pointerMove', duration: 500, x: 0, y: startPoint * density },
            { type: 'pointerUp', button: 0 },
            { type: 'pause', duration: 500}
          ]
      }]
        break;
      case 'left':
        swipeCalculation = [{
          type: 'pointer',
          id: 'finger1',
          parameters: { pointerType: 'touch' },
          actions: [
            { type: 'pointerMove', duration: 0, x: anchor, y: startPoint },
            { type: 'pointerDown', button: 0 },
            { type: 'pause', duration: 500 },
            { type: 'pointerMove', duration: 500, x: 0, y: endPoint * density },
            { type: 'pointerUp', button: 0 },
            { type: 'pause', duration: 500}
          ]
      }]
          break;
      case 'right':
        swipeCalculation = [{
          type: 'pointer',
          id: 'finger1',
          parameters: { pointerType: 'touch' },
          actions: [
            { type: 'pointerMove', duration: 0, x: anchor, y: startPoint },
            { type: 'pointerDown', button: 0 },
            { type: 'pause', duration: 500 },
            { type: 'pointerMove', duration: 500, x: 0, y: endPoint * density },
            { type: 'pointerUp', button: 0 },
            { type: 'pause', duration: 500}
          ]
      }]
          break;
    }

    // Perform the scroll action
    if(swipeCalculation.length > 0)
      await this.driver.performActions(swipeCalculation);
    else
      console.log('Invalid swipe direction');
  }
}

exports.Utility = Utility;