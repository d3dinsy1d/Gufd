import { header } from "../components/Header/Header.js";
header();

import { useDynamicAdapt } from "../src/libraries/dynamic_adapt/dynamicAdapt.js";
useDynamicAdapt();

import { doorsType } from "../statics/doors-type/doors-type.js";
doorsType();

import { doorCard } from "../statics/door-card/door-card.js";
doorCard();