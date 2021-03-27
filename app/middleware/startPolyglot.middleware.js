"use strict";

import Polyglot from "node-polyglot";
import { myEn, myEs } from "../i18n/index.js";

const languages = {
  en: myEn,
  es: myEs,
};

const getLanguage = (language) => {
  return languages[language] || myDe;
};

const startPolyglot = (request, response, next) => {
  const locale = request.locale.language;

  request.polyglot = new Polyglot();
  request.polyglot.extend(getLanguage(locale));

  next();
};

export { startPolyglot };