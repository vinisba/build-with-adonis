import { DateTime } from "luxon";
import Hash from "@ioc:Adonis/Core/Hash";
import {
  column,
  beforeSave,
  BaseModel,
  belongsTo,
  BelongsTo,
  hasMany,
  HasMany,
  manyToMany,
  ManyToMany,
  hasOne,
  HasOne,
} from "@ioc:Adonis/Lucid/Orm";
import Role from "./Role";
import Topic from "./Topic";
import Post from "./Post";
import Profile from "./Profile";

export default class User extends BaseModel {
  @column({ isPrimary: true })
  public id: number;

  @column()
  public roleId: number;

  @column()
  public username: string;

  @column()
  public email: string;

  @column({ serializeAs: null })
  public password: string;

  @column()
  public rememberMeToken: string | null;

  @column.dateTime({ autoCreate: true })
  public createdAt: DateTime;

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  public updatedAt: DateTime;

  @beforeSave()
  public static async hashPassword(user: User) {
    if (user.$dirty.password) {
      user.password = await Hash.make(user.password);
    }
  }

  @belongsTo(() => Role)
  public role: BelongsTo<typeof Role>;

  @hasMany(() => Topic)
  public topics: HasMany<typeof Topic>;

  @manyToMany(() => Post, {
    pivotTable: "author_posts",
    pivotColumns: ["author_type_id"],
  })
  public posts: ManyToMany<typeof Post>;

  @hasOne(() => Profile)
  public profile: HasOne<typeof Profile>;
}
