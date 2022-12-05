const Dummybooks = [
  {
    id: 1,
    imgURL:
      'https://an2-img.amz.wtchn.net/image/v2/uTmwpTMFuw8VQiDVc2ogUg.jpg?jwt=ZXlKaGJHY2lPaUpJVXpJMU5pSjkuZXlKdmNIUnpJanBiSW1SZk1qZ3dlRFF3TUhFNE1DSmRMQ0p3SWpvaUwzWXlMM04wYjNKbEwySnZiMnN2TVRZMk5URTVPRFk1TlRrM09USTROemczTWlKOS5nbkU0YWNLYnUzOWpTM3VYejEzMUxyQ2pVXzBRQ0w2NllNb3V2dFpJd2lF',
    name: '어쩌구',
  },
  {
    id: 2,
    imgURL:
      'https://an2-img.amz.wtchn.net/image/v2/35dTFlDSqD9NKx3lPPm1HQ.jpg?jwt=ZXlKaGJHY2lPaUpJVXpJMU5pSjkuZXlKdmNIUnpJanBiSW1SZk1qZ3dlRFF3TUhFNE1DSmRMQ0p3SWpvaUwzWXlMM04wYjNKbEwySnZiMnN2TVRZMU1qTTRORGMxTmpJM05USTNNVGd4TkNKOS5WMzNCZG93X05iVm9ESjZjRlNUeVZTaUdMZlVKYlFkNGFlVzBDbXNieHZ3',
    name: '저쩌구',
  },
  {
    id: 3,
    imgURL:
      'https://an2-img.amz.wtchn.net/image/v2/35dTFlDSqD9NKx3lPPm1HQ.jpg?jwt=ZXlKaGJHY2lPaUpJVXpJMU5pSjkuZXlKdmNIUnpJanBiSW1SZk1qZ3dlRFF3TUhFNE1DSmRMQ0p3SWpvaUwzWXlMM04wYjNKbEwySnZiMnN2TVRZMU1qTTRORGMxTmpJM05USTNNVGd4TkNKOS5WMzNCZG93X05iVm9ESjZjRlNUeVZTaUdMZlVKYlFkNGFlVzBDbXNieHZ3',
    name: '이러쿵저러쿵',
  },
  {
    id: 4,
    imgURL:
      'https://an2-img.amz.wtchn.net/image/v2/35dTFlDSqD9NKx3lPPm1HQ.jpg?jwt=ZXlKaGJHY2lPaUpJVXpJMU5pSjkuZXlKdmNIUnpJanBiSW1SZk1qZ3dlRFF3TUhFNE1DSmRMQ0p3SWpvaUwzWXlMM04wYjNKbEwySnZiMnN2TVRZMU1qTTRORGMxTmpJM05USTNNVGd4TkNKOS5WMzNCZG93X05iVm9ESjZjRlNUeVZTaUdMZlVKYlFkNGFlVzBDbXNieHZ3',
    name: '요렇게저렇게',
  },
  {
    id: 5,
    imgURL:
      'https://an2-img.amz.wtchn.net/image/v2/35dTFlDSqD9NKx3lPPm1HQ.jpg?jwt=ZXlKaGJHY2lPaUpJVXpJMU5pSjkuZXlKdmNIUnpJanBiSW1SZk1qZ3dlRFF3TUhFNE1DSmRMQ0p3SWpvaUwzWXlMM04wYjNKbEwySnZiMnN2TVRZMU1qTTRORGMxTmpJM05USTNNVGd4TkNKOS5WMzNCZG93X05iVm9ESjZjRlNUeVZTaUdMZlVKYlFkNGFlVzBDbXNieHZ3',
    name: '이런식으로',
  },

  {
    id: 6,
    imgURL:
      'https://an2-img.amz.wtchn.net/image/v2/35dTFlDSqD9NKx3lPPm1HQ.jpg?jwt=ZXlKaGJHY2lPaUpJVXpJMU5pSjkuZXlKdmNIUnpJanBiSW1SZk1qZ3dlRFF3TUhFNE1DSmRMQ0p3SWpvaUwzWXlMM04wYjNKbEwySnZiMnN2TVRZMU1qTTRORGMxTmpJM05USTNNVGd4TkNKOS5WMzNCZG93X05iVm9ESjZjRlNUeVZTaUdMZlVKYlFkNGFlVzBDbXNieHZ3',
    name: 'ㅇㅇㅇㅇㅇ',
  },
  {
    id: 7,
    imgURL:
      'https://an2-img.amz.wtchn.net/image/v2/35dTFlDSqD9NKx3lPPm1HQ.jpg?jwt=ZXlKaGJHY2lPaUpJVXpJMU5pSjkuZXlKdmNIUnpJanBiSW1SZk1qZ3dlRFF3TUhFNE1DSmRMQ0p3SWpvaUwzWXlMM04wYjNKbEwySnZiMnN2TVRZMU1qTTRORGMxTmpJM05USTNNVGd4TkNKOS5WMzNCZG93X05iVm9ESjZjRlNUeVZTaUdMZlVKYlFkNGFlVzBDbXNieHZ3',
    name: 'ㄴㄴㄴㄴㄴ오',
  },
  {
    id: 8,
    imgURL:
      'https://an2-img.amz.wtchn.net/image/v2/35dTFlDSqD9NKx3lPPm1HQ.jpg?jwt=ZXlKaGJHY2lPaUpJVXpJMU5pSjkuZXlKdmNIUnpJanBiSW1SZk1qZ3dlRFF3TUhFNE1DSmRMQ0p3SWpvaUwzWXlMM04wYjNKbEwySnZiMnN2TVRZMU1qTTRORGMxTmpJM05USTNNVGd4TkNKOS5WMzNCZG93X05iVm9ESjZjRlNUeVZTaUdMZlVKYlFkNGFlVzBDbXNieHZ3',
    name: 'ㄹㄹㄹㄹㄹㄹㄹㄹ',
  },
  {
    id: 9,
    imgURL:
      'https://an2-img.amz.wtchn.net/image/v2/35dTFlDSqD9NKx3lPPm1HQ.jpg?jwt=ZXlKaGJHY2lPaUpJVXpJMU5pSjkuZXlKdmNIUnpJanBiSW1SZk1qZ3dlRFF3TUhFNE1DSmRMQ0p3SWpvaUwzWXlMM04wYjNKbEwySnZiMnN2TVRZMU1qTTRORGMxTmpJM05USTNNVGd4TkNKOS5WMzNCZG93X05iVm9ESjZjRlNUeVZTaUdMZlVKYlFkNGFlVzBDbXNieHZ3',
    name: 'ㄴㄴㄴㄴㄴ오',
  },
  {
    id: 10,
    imgURL:
      'https://an2-img.amz.wtchn.net/image/v2/35dTFlDSqD9NKx3lPPm1HQ.jpg?jwt=ZXlKaGJHY2lPaUpJVXpJMU5pSjkuZXlKdmNIUnpJanBiSW1SZk1qZ3dlRFF3TUhFNE1DSmRMQ0p3SWpvaUwzWXlMM04wYjNKbEwySnZiMnN2TVRZMU1qTTRORGMxTmpJM05USTNNVGd4TkNKOS5WMzNCZG93X05iVm9ESjZjRlNUeVZTaUdMZlVKYlFkNGFlVzBDbXNieHZ3',
    name: 'ㄹㄹㄹㄹㄹㄹㄹㄹ',
  },
];

export default Dummybooks;
