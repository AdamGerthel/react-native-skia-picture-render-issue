import { Image } from 'react-native'
import { Skia, type SkImage } from '@shopify/react-native-skia'

const imgFactory = Skia.Image.MakeImageFromEncoded.bind(Skia.Image)

export const LINE_ORIGINAL_WIDTH = 3000
export const LINE_ORIGINAL_HEIGHT = 15
export const BUTTON_SIDE_ORIGINAL_WIDTH = 160
export const BUTTON_SIDE_ORIGINAL_HEIGHT = 160
export const CARD_CORNER_ORIGINAL_SIZE = 180

const BUTTON_LEFT_SIDES = [
  require('./button-left.png'),
  require('./button-left-2.png'),
  require('./button-left-3.png')
] as string[]

const BUTTON_RIGHT_SIDES = [
  require('./button-right.png'),
  require('./button-right-2.png'),
  require('./button-right-3.png')
] as string[]

const lineBottom = require('./line-bottom.png') as string
const lineTop = require('./line-top.png') as string

export class SkiaImageCache {
  constructor() {
    this.generateCache()
  }

  isCaching: boolean = false

  cachedImages?: {
    lineTop: SkImage
    lineBottom: SkImage
    buttonLeftSides: SkImage[]
    buttonRightSides: SkImage[]
  }

  static async cacheImage(source: string): Promise<SkImage> {
    const uri = typeof source === 'string' ? source : Image.resolveAssetSource(source).uri
    const data = await Skia.Data.fromURI(uri)
    const image = imgFactory(data)

    if (!image) {
      throw new Error('Failed to load image')
    }

    return image
  }

  async generateCache() {
    if (this.isCaching) {
      return
    }

    try {
      this.isCaching = true

      this.cachedImages = {
        lineTop: await SkiaImageCache.cacheImage(lineTop),
        lineBottom: await SkiaImageCache.cacheImage(lineBottom),
        buttonLeftSides: await Promise.all(
          BUTTON_LEFT_SIDES.map(SkiaImageCache.cacheImage.bind(this))
        ),
        buttonRightSides: await Promise.all(
          BUTTON_RIGHT_SIDES.map(SkiaImageCache.cacheImage.bind(this))
        )
      }
    } catch (error) {
      console.error(error)
    }

    this.isCaching = false
  }
}

export const skiaImageCache = new SkiaImageCache()
