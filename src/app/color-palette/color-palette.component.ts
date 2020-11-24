import { Component, OnInit } from '@angular/core';
import {
  animate,
  state,
  style,
  transition,
  trigger,
} from '@angular/animations';

@Component({
  selector: 'app-color-palette',
  templateUrl: './color-palette.component.html',
  styleUrls: ['./color-palette.component.scss'],
  animations: [
    trigger('detailExpand', [
      state(
        'collapsed',
        style({ height: '0px', minHeight: '0', visibility: 'hidden' })
      ),
      state('expanded', style({ height: '*', visibility: 'visible' })),
      transition(
        'expanded <=> collapsed',
        animate('225ms cubic-bezier(0.4, 0.0, 0.2, 1)')
      ),
    ]),
  ],
})
export class ColorPaletteComponent implements OnInit {
  panelOpenState = false;

  Blue: ColorCode[] = [
    {
      color: 'Blue',
      variable: '$v-blue-50',
      hexcode: '#edfafd',
      colorAdd: {
        'background-color': '#edfafd',
      },
    },
    {
      color: 'Blue',
      variable: '$v-blue-100',
      hexcode: '#caf0f8',
      colorAdd: {
        'background-color': '#caf0f8',
      },
    },
    {
      color: 'Blue',
      variable: '$v-blue-200',
      hexcode: '#ade8f4',
      colorAdd: {
        'background-color': '#ade8f4',
      },
    },
    {
      color: 'Blue',
      variable: '$v-blue-300',
      hexcode: '#90e0ef',
      colorAdd: {
        'background-color': '#90e0ef',
      },
    },
    {
      color: 'Blue',
      variable: '$v-blue-400',
      hexcode: '#48cae4',
      colorAdd: {
        'background-color': '#48cae4',
      },
    },
    {
      color: 'Blue',
      variable: '$v-blue-500',
      hexcode: '#00b4d8',
      colorAdd: {
        'background-color': '#00b4d8',
      },
    },
    {
      color: 'Blue',
      variable: '$v-blue-600',
      hexcode: '#0096c7',
      colorAdd: {
        'background-color': '#0096c7',
      },
    },
    {
      color: 'Blue',
      variable: '$v-blue-700',
      hexcode: '#0077b6',
      colorAdd: {
        'background-color': '#0077b6',
      },
    },
    {
      color: 'Blue',
      variable: '$v-blue-800',
      hexcode: '#023e8a',
      colorAdd: {
        'background-color': '#023e8a',
      },
    },
    {
      color: 'Blue',
      variable: '$v-blue-900',
      hexcode: '#03045e',
      colorAdd: {
        'background-color': '#03045e',
      },
    },
  ];

  Indigo: ColorCode[] = [
    {
      color: 'Indigo',
      variable: '$v-indigo-50',
      hexcode: '',
      colorAdd: {},
    },
  ];

  Black: ColorCode[] = [
    {
      color: 'Black',
      variable: '$v-black-50',
      hexcode: '#e5e5e5',
      colorAdd: {
        'background-color': '#e5e5e5',
      },
    },
    {
      color: 'Black',
      variable: '$v-black-100',
      hexcode: '#cfd0d0',
      colorAdd: { 'background-color': '#cfd0d0' },
    },
    {
      color: 'Black',
      variable: '$v-black-200',
      hexcode: '#b9babb',
      colorAdd: { 'background-color': '#b9babb' },
    },
    {
      color: 'Black',
      variable: '$v-black-300',
      hexcode: '#a4a5a6',
      colorAdd: { 'background-color': '#a4a5a6' },
    },
    {
      color: 'Black',
      variable: '$v-black-400',
      hexcode: '#8e9091',
      colorAdd: { 'background-color': '#8e9091' },
    },
    {
      color: 'Black',
      variable: '$v-black-500',
      hexcode: '#787a7d',
      colorAdd: { 'background-color': '#787a7d' },
    },
    {
      color: 'Black',
      variable: '$v-black-600',
      hexcode: '#626568',
      colorAdd: { 'background-color': '#626568' },
    },
    {
      color: 'Black',
      variable: '$v-black-700',
      hexcode: '#4d5053',
      colorAdd: { 'background-color': '#4d5053' },
    },
    {
      color: 'Black',
      variable: '$v-black-800',
      hexcode: '#373a3e',
      colorAdd: { 'background-color': '#373a3e' },
    },
    {
      color: 'Black',
      variable: '$v-black-900',
      hexcode: '#212529',
      colorAdd: { 'background-color': '#212529' },
    },
  ];

  Red: ColorCode[] = [
    {
      color: 'Red',
      variable: '$v-red-50',
      hexcode: '#efa9a9',
      colorAdd: {
        'background-color': '#efa9a9',
      },
    },
    {
      color: 'Red',
      variable: '$v-red-100',
      hexcode: '#ea9a9a',
      colorAdd: {
        'background-color': '#ea9a9a',
      },
    },
    {
      color: 'Red',
      variable: '$v-red-200',
      hexcode: '#e48b8b',
      colorAdd: {
        'background-color': '#e48b8b',
      },
    },
    {
      color: 'Red',
      variable: '$v-red-300',
      hexcode: '#df7c7c',
      colorAdd: {
        'background-color': '#df7c7c',
      },
    },
    {
      color: 'Red',
      variable: '$v-red-400',
      hexcode: '#d96d6d',
      colorAdd: {
        'background-color': '#d96d6d',
      },
    },
    {
      color: 'Red',
      variable: '$v-red-500',
      hexcode: '#d45f5f',
      colorAdd: {
        'background-color': '#d45f5f',
      },
    },
    {
      color: 'Red',
      variable: '$v-red-600',
      hexcode: '#ce5050',
      colorAdd: {
        'background-color': '#ce5050',
      },
    },
    {
      color: 'Red',
      variable: '$v-red-700',
      hexcode: '#c94141',
      colorAdd: {
        'background-color': '#c94141',
      },
    },
    {
      color: 'Red',
      variable: '$v-red-800',
      hexcode: '#c33232',
      colorAdd: {
        'background-color': '#c33232',
      },
    },
    {
      color: 'Red',
      variable: '$v-red-900',
      hexcode: '#be2323',
      colorAdd: {
        'background-color': '#be2323',
      },
    },
  ];

  Yellow: ColorCode[] = [
    {
      color: 'Yellow',
      variable: '$v-yellow-50',
      hexcode: '#fee3af',
      colorAdd: {
        'background-color': '#fee3af',
      },
    },
    {
      color: 'Yellow',
      variable: '$v-yellow-100',
      hexcode: '#fddc9c',
      colorAdd: {
        'background-color': '#fddc9c',
      },
    },
    {
      color: 'Yellow',
      variable: '$v-yellow-200',
      hexcode: '#fbd589',
      colorAdd: {
        'background-color': '#fbd589',
      },
    },
    {
      color: 'Yellow',
      variable: '$v-yellow-300',
      hexcode: '#facd76',
      colorAdd: {
        'background-color': '#facd76',
      },
    },
    {
      color: 'Yellow',
      variable: '$v-yellow-400',
      hexcode: '#f8c663',
      colorAdd: {
        'background-color': '#f8c663',
      },
    },
    {
      color: 'Yellow',
      variable: '$v-yellow-500',
      hexcode: '#f7bf50',
      colorAdd: {
        'background-color': '#f7bf50',
      },
    },
    {
      color: 'Yellow',
      variable: '$v-yellow-600',
      hexcode: '#f5b83d',
      colorAdd: {
        'background-color': '#f5b83d',
      },
    },
    {
      color: 'Yellow',
      variable: '$v-yellow-700',
      hexcode: '#f4b02a',
      colorAdd: {
        'background-color': '#f4b02a',
      },
    },
    {
      color: 'Yellow',
      variable: '$v-yellow-800',
      hexcode: '#f2a917',
      colorAdd: {
        'background-color': '#f2a917',
      },
    },
    {
      color: 'Yellow',
      variable: '$v-yellow-900',
      hexcode: '#f1a204',
      colorAdd: {
        'background-color': '#f1a204',
      },
    },
  ];

  Green: ColorCode[] = [
    {
      color: 'Green',
      variable: '$v-green-50',
      hexcode: '#D4E6C7',
      colorAdd: {
        'background-color': '#D4E6C7',
      },
    },
    {
      color: 'Green',
      variable: '$v-green-100',
      hexcode: '#C8DEB9',
      colorAdd: {
        'background-color': '#C8DEB9',
      },
    },
    {
      color: 'Green',
      variable: '$v-green-200',
      hexcode: '#BDD5AA',
      colorAdd: {
        'background-color': '#BDD5AA',
      },
    },
    {
      color: 'Green',
      variable: '$v-green-300',
      hexcode: '#B1CD9C',
      colorAdd: {
        'background-color': '#B1CD9C',
      },
    },
    {
      color: 'Green',
      variable: '$v-green-400',
      hexcode: '#A5C58E',
      colorAdd: {
        'background-color': '#A5C58E',
      },
    },
    {
      color: 'Green',
      variable: '$v-green-500',
      hexcode: '#9ABC7F',
      colorAdd: {
        'background-color': '#9ABC7F',
      },
    },
    {
      color: 'Green',
      variable: '$v-green-600',
      hexcode: '#8EB471',
      colorAdd: {
        'background-color': '#8EB471',
      },
    },
    {
      color: 'Green',
      variable: '$v-green-700',
      hexcode: '#82AC63',
      colorAdd: {
        'background-color': '#82AC63',
      },
    },
    {
      color: 'Green',
      variable: '$v-green-800',
      hexcode: '#77A354',
      colorAdd: {
        'background-color': '#77A354',
      },
    },
    {
      color: 'Green',
      variable: '$v-green-900',
      hexcode: '#6B9B46',
      colorAdd: {
        'background-color': '#6B9B46',
      },
    },
  ];
  constructor() {}

  ngOnInit(): void {}


}
export interface ColorCode {
  color: string;
  variable: string;
  hexcode: string;
  colorAdd: {};
}
