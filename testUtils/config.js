import { StyleSheetTestUtils } from 'aphrodite';
import 'regenerator-runtime/runtime';
// to support async await

require('jest-fetch-mock').enableMocks()
// because fetch doesn't work in node

StyleSheetTestUtils.suppressStyleInjection();
