import type { HttpContextContract } from "@ioc:Adonis/Core/HttpContext";

export default class PostsController {
  public async index({ view }: HttpContextContract) {
    return view.render("studio/posts/index", {});
  }

  public async create({ view }: HttpContextContract) {
    return view.render("studio/posts/createOrEdit", {});
  }

  public async store({ request }: HttpContextContract) {}
}
