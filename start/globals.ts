import View from "@ioc:Adonis/Core/View";
import States, { StateDesc } from "App/Enums/States";

View.global("StateEnum", States);
View.global("StateEnumDesc", StateDesc);
