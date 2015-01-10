using Microsoft.Owin;
using Owin;

[assembly: OwinStartupAttribute(typeof(TestAngularTemplate.Startup))]
namespace TestAngularTemplate
{
    public partial class Startup
    {
        public void Configuration(IAppBuilder app)
        {
            ConfigureAuth(app);
        }
    }
}
