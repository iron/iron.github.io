(function() {var implementors = {};
implementors['mount'] = ["<a class='stability Unmarked' title='No stability level'></a>impl&lt;M: <a class='trait' href='http://doc.rust-lang.org/master/core/clone/trait.Clone.html' title='core::clone::Clone'>Clone</a>&gt; <a class='trait' href='http://doc.rust-lang.org/master/core/clone/trait.Clone.html' title='core::clone::Clone'>Clone</a> for <a class='struct' href='mount/struct.Mount.html' title='mount::Mount'>Mount</a>&lt;M&gt;",];implementors['staticfile'] = ["<a class='stability Unmarked' title='No stability level'></a>impl <a class='trait' href='http://doc.rust-lang.org/master/core/clone/trait.Clone.html' title='core::clone::Clone'>Clone</a> for <a class='struct' href='staticfile/struct.Static.html' title='staticfile::Static'>Static</a>",];implementors['static_file'] = ["<a class='stability Unmarked' title='No stability level'></a>impl <a class='trait' href='http://doc.rust-lang.org/nightly/core/clone/trait.Clone.html' title='core::clone::Clone'>Clone</a> for <a class='struct' href='static_file/struct.Static.html' title='static_file::Static'>Static</a>",];implementors['persistent'] = ["<a class='stability Unmarked' title='No stability level'></a>impl&lt;P, D: <a class='trait' href='http://doc.rust-lang.org/nightly/core/kinds/trait.Send.html' title='core::kinds::Send'>Send</a> + <a class='trait' href='http://doc.rust-lang.org/nightly/core/kinds/trait.Sync.html' title='core::kinds::Sync'>Sync</a>&gt; <a class='trait' href='http://doc.rust-lang.org/nightly/core/clone/trait.Clone.html' title='core::clone::Clone'>Clone</a> for <a class='struct' href='persistent/struct.Read.html' title='persistent::Read'>Read</a>&lt;P, D&gt;","<a class='stability Unmarked' title='No stability level'></a>impl&lt;P, D: <a class='trait' href='http://doc.rust-lang.org/nightly/core/kinds/trait.Send.html' title='core::kinds::Send'>Send</a> + <a class='trait' href='http://doc.rust-lang.org/nightly/core/kinds/trait.Sync.html' title='core::kinds::Sync'>Sync</a>&gt; <a class='trait' href='http://doc.rust-lang.org/nightly/core/clone/trait.Clone.html' title='core::clone::Clone'>Clone</a> for <a class='struct' href='persistent/struct.State.html' title='persistent::State'>State</a>&lt;P, D&gt;","<a class='stability Unmarked' title='No stability level'></a>impl&lt;P, D: <a class='trait' href='http://doc.rust-lang.org/nightly/core/kinds/trait.Send.html' title='core::kinds::Send'>Send</a>&gt; <a class='trait' href='http://doc.rust-lang.org/nightly/core/clone/trait.Clone.html' title='core::clone::Clone'>Clone</a> for <a class='struct' href='persistent/struct.Write.html' title='persistent::Write'>Write</a>&lt;P, D&gt;",];implementors['router'] = ["<a class='stability Unmarked' title='No stability level'></a>impl <a class='trait' href='http://doc.rust-lang.org/nightly/core/clone/trait.Clone.html' title='core::clone::Clone'>Clone</a> for CharSet","<a class='stability Unmarked' title='No stability level'></a>impl <a class='trait' href='http://doc.rust-lang.org/nightly/core/clone/trait.Clone.html' title='core::clone::Clone'>Clone</a> for CharacterClass","<a class='stability Unmarked' title='No stability level'></a>impl <a class='trait' href='http://doc.rust-lang.org/nightly/core/clone/trait.Clone.html' title='core::clone::Clone'>Clone</a> for Thread","<a class='stability Unmarked' title='No stability level'></a>impl&lt;T: <a class='trait' href='http://doc.rust-lang.org/nightly/core/clone/trait.Clone.html' title='core::clone::Clone'>Clone</a>&gt; <a class='trait' href='http://doc.rust-lang.org/nightly/core/clone/trait.Clone.html' title='core::clone::Clone'>Clone</a> for State&lt;T&gt;","<a class='stability Unmarked' title='No stability level'></a>impl&lt;T: <a class='trait' href='http://doc.rust-lang.org/nightly/core/clone/trait.Clone.html' title='core::clone::Clone'>Clone</a>&gt; <a class='trait' href='http://doc.rust-lang.org/nightly/core/clone/trait.Clone.html' title='core::clone::Clone'>Clone</a> for NFA&lt;T&gt;","<a class='stability Unmarked' title='No stability level'></a>impl <a class='trait' href='http://doc.rust-lang.org/nightly/core/clone/trait.Clone.html' title='core::clone::Clone'>Clone</a> for Metadata","<a class='stability Unmarked' title='No stability level'></a>impl <a class='trait' href='http://doc.rust-lang.org/nightly/core/clone/trait.Clone.html' title='core::clone::Clone'>Clone</a> for <a class='struct' href='router/struct.Params.html' title='router::Params'>Params</a>","<a class='stability Unmarked' title='No stability level'></a>impl&lt;T: <a class='trait' href='http://doc.rust-lang.org/nightly/core/clone/trait.Clone.html' title='core::clone::Clone'>Clone</a>&gt; <a class='trait' href='http://doc.rust-lang.org/nightly/core/clone/trait.Clone.html' title='core::clone::Clone'>Clone</a> for Router&lt;T&gt;",];implementors['iron'] = ["<a class='stability Experimental' title='Experimental'></a>impl <a class='trait' href='http://doc.rust-lang.org/nightly/core/clone/trait.Clone.html' title='core::clone::Clone'>Clone</a> for <a class='enum' href='iron/method/enum.Method.html' title='iron::method::Method'>Method</a>","<a class='stability Experimental' title='Experimental'></a>impl <a class='trait' href='http://doc.rust-lang.org/nightly/core/clone/trait.Clone.html' title='core::clone::Clone'>Clone</a> for <a class='struct' href='iron/headers/struct.Accept.html' title='iron::headers::Accept'>Accept</a>","<a class='stability Experimental' title='Experimental'></a>impl&lt;S: <a class='trait' href='iron/headers/authorization/trait.Scheme.html' title='iron::headers::authorization::Scheme'>Scheme</a> + <a class='trait' href='http://doc.rust-lang.org/nightly/core/clone/trait.Clone.html' title='core::clone::Clone'>Clone</a>&gt; <a class='trait' href='http://doc.rust-lang.org/nightly/core/clone/trait.Clone.html' title='core::clone::Clone'>Clone</a> for <a class='struct' href='iron/headers/struct.Authorization.html' title='iron::headers::Authorization'>Authorization</a>&lt;S&gt;","<a class='stability Experimental' title='Experimental'></a>impl <a class='trait' href='http://doc.rust-lang.org/nightly/core/clone/trait.Clone.html' title='core::clone::Clone'>Clone</a> for <a class='struct' href='iron/headers/authorization/struct.Basic.html' title='iron::headers::authorization::Basic'>Basic</a>","<a class='stability Experimental' title='Experimental'></a>impl <a class='trait' href='http://doc.rust-lang.org/nightly/core/clone/trait.Clone.html' title='core::clone::Clone'>Clone</a> for <a class='struct' href='iron/headers/struct.Cookies.html' title='iron::headers::Cookies'>Cookies</a>","<a class='stability Experimental' title='Experimental'></a>impl <a class='trait' href='http://doc.rust-lang.org/nightly/core/clone/trait.Clone.html' title='core::clone::Clone'>Clone</a> for <a class='struct' href='iron/headers/struct.Connection.html' title='iron::headers::Connection'>Connection</a>","<a class='stability Experimental' title='Experimental'></a>impl <a class='trait' href='http://doc.rust-lang.org/nightly/core/clone/trait.Clone.html' title='core::clone::Clone'>Clone</a> for <a class='enum' href='iron/headers/connection/enum.ConnectionOption.html' title='iron::headers::connection::ConnectionOption'>ConnectionOption</a>","<a class='stability Experimental' title='Experimental'></a>impl <a class='trait' href='http://doc.rust-lang.org/nightly/core/clone/trait.Clone.html' title='core::clone::Clone'>Clone</a> for <a class='struct' href='iron/headers/struct.ContentLength.html' title='iron::headers::ContentLength'>ContentLength</a>","<a class='stability Experimental' title='Experimental'></a>impl <a class='trait' href='http://doc.rust-lang.org/nightly/core/clone/trait.Clone.html' title='core::clone::Clone'>Clone</a> for <a class='struct' href='iron/headers/struct.ContentType.html' title='iron::headers::ContentType'>ContentType</a>","<a class='stability Experimental' title='Experimental'></a>impl <a class='trait' href='http://doc.rust-lang.org/nightly/core/clone/trait.Clone.html' title='core::clone::Clone'>Clone</a> for <a class='struct' href='iron/headers/struct.Date.html' title='iron::headers::Date'>Date</a>","<a class='stability Experimental' title='Experimental'></a>impl <a class='trait' href='http://doc.rust-lang.org/nightly/core/clone/trait.Clone.html' title='core::clone::Clone'>Clone</a> for <a class='struct' href='iron/headers/struct.Host.html' title='iron::headers::Host'>Host</a>","<a class='stability Experimental' title='Experimental'></a>impl <a class='trait' href='http://doc.rust-lang.org/nightly/core/clone/trait.Clone.html' title='core::clone::Clone'>Clone</a> for <a class='struct' href='iron/headers/struct.Location.html' title='iron::headers::Location'>Location</a>","<a class='stability Experimental' title='Experimental'></a>impl <a class='trait' href='http://doc.rust-lang.org/nightly/core/clone/trait.Clone.html' title='core::clone::Clone'>Clone</a> for <a class='struct' href='iron/headers/struct.Server.html' title='iron::headers::Server'>Server</a>","<a class='stability Experimental' title='Experimental'></a>impl <a class='trait' href='http://doc.rust-lang.org/nightly/core/clone/trait.Clone.html' title='core::clone::Clone'>Clone</a> for <a class='struct' href='iron/headers/struct.SetCookie.html' title='iron::headers::SetCookie'>SetCookie</a>","<a class='stability Experimental' title='Experimental'></a>impl <a class='trait' href='http://doc.rust-lang.org/nightly/core/clone/trait.Clone.html' title='core::clone::Clone'>Clone</a> for <a class='struct' href='iron/headers/struct.TransferEncoding.html' title='iron::headers::TransferEncoding'>TransferEncoding</a>","<a class='stability Experimental' title='Experimental'></a>impl <a class='trait' href='http://doc.rust-lang.org/nightly/core/clone/trait.Clone.html' title='core::clone::Clone'>Clone</a> for <a class='enum' href='iron/headers/transfer_encoding/enum.Encoding.html' title='iron::headers::transfer_encoding::Encoding'>Encoding</a>","<a class='stability Experimental' title='Experimental'></a>impl <a class='trait' href='http://doc.rust-lang.org/nightly/core/clone/trait.Clone.html' title='core::clone::Clone'>Clone</a> for <a class='struct' href='iron/headers/struct.Upgrade.html' title='iron::headers::Upgrade'>Upgrade</a>","<a class='stability Experimental' title='Experimental'></a>impl <a class='trait' href='http://doc.rust-lang.org/nightly/core/clone/trait.Clone.html' title='core::clone::Clone'>Clone</a> for <a class='enum' href='iron/headers/upgrade/enum.Protocol.html' title='iron::headers::upgrade::Protocol'>Protocol</a>","<a class='stability Experimental' title='Experimental'></a>impl <a class='trait' href='http://doc.rust-lang.org/nightly/core/clone/trait.Clone.html' title='core::clone::Clone'>Clone</a> for <a class='struct' href='iron/headers/struct.UserAgent.html' title='iron::headers::UserAgent'>UserAgent</a>","<a class='stability Experimental' title='Experimental'></a>impl <a class='trait' href='http://doc.rust-lang.org/nightly/core/clone/trait.Clone.html' title='core::clone::Clone'>Clone</a> for <a class='struct' href='http://doc.rust-lang.org/nightly/alloc/boxed/struct.Box.html' title='alloc::boxed::Box'>Box</a>&lt;HeaderFormat&gt;","<a class='stability Experimental' title='Experimental'></a>impl <a class='trait' href='http://doc.rust-lang.org/nightly/core/clone/trait.Clone.html' title='core::clone::Clone'>Clone</a> for <a class='struct' href='iron/struct.Headers.html' title='iron::Headers'>Headers</a>","<a class='stability Experimental' title='Experimental'></a>impl <a class='trait' href='http://doc.rust-lang.org/nightly/core/clone/trait.Clone.html' title='core::clone::Clone'>Clone</a> for Item","<a class='stability Experimental' title='Experimental'></a>impl <a class='trait' href='http://doc.rust-lang.org/nightly/core/clone/trait.Clone.html' title='core::clone::Clone'>Clone</a> for <a class='struct' href='http://doc.rust-lang.org/nightly/std/sync/lock/struct.RWLock.html' title='std::sync::lock::RWLock'>RWLock</a>&lt;Item&gt;","<a class='stability Experimental' title='Experimental'></a>impl <a class='trait' href='http://doc.rust-lang.org/nightly/core/clone/trait.Clone.html' title='core::clone::Clone'>Clone</a> for CaseInsensitive","<a class='stability Experimental' title='Experimental'></a>impl <a class='trait' href='http://doc.rust-lang.org/nightly/core/clone/trait.Clone.html' title='core::clone::Clone'>Clone</a> for RawStatus","<a class='stability Experimental' title='Experimental'></a>impl <a class='trait' href='http://doc.rust-lang.org/nightly/core/clone/trait.Clone.html' title='core::clone::Clone'>Clone</a> for <a class='struct' href='http://doc.rust-lang.org/nightly/alloc/boxed/struct.Box.html' title='alloc::boxed::Box'>Box</a>&lt;NetworkStream&gt;","<a class='stability Experimental' title='Experimental'></a>impl <a class='trait' href='http://doc.rust-lang.org/nightly/core/clone/trait.Clone.html' title='core::clone::Clone'>Clone</a> for HttpAcceptor","<a class='stability Experimental' title='Experimental'></a>impl <a class='trait' href='http://doc.rust-lang.org/nightly/core/clone/trait.Clone.html' title='core::clone::Clone'>Clone</a> for HttpStream","<a class='stability Experimental' title='Experimental'></a>impl <a class='trait' href='http://doc.rust-lang.org/nightly/core/clone/trait.Clone.html' title='core::clone::Clone'>Clone</a> for <a class='enum' href='iron/status/enum.Status.html' title='iron::status::Status'>StatusCode</a>","<a class='stability Experimental' title='Experimental'></a>impl <a class='trait' href='http://doc.rust-lang.org/nightly/core/clone/trait.Clone.html' title='core::clone::Clone'>Clone</a> for StatusClass","<a class='stability Experimental' title='Experimental'></a>impl <a class='trait' href='http://doc.rust-lang.org/nightly/core/clone/trait.Clone.html' title='core::clone::Clone'>Clone</a> for RequestUri","<a class='stability Experimental' title='Experimental'></a>impl <a class='trait' href='http://doc.rust-lang.org/nightly/core/clone/trait.Clone.html' title='core::clone::Clone'>Clone</a> for HttpError","<a class='stability Experimental' title='Experimental'></a>impl <a class='trait' href='http://doc.rust-lang.org/nightly/core/clone/trait.Clone.html' title='core::clone::Clone'>Clone</a> for <a class='struct' href='iron/mime/struct.Mime.html' title='iron::mime::Mime'>Mime</a>","<a class='stability Experimental' title='Experimental'></a>impl <a class='trait' href='http://doc.rust-lang.org/nightly/core/clone/trait.Clone.html' title='core::clone::Clone'>Clone</a> for <a class='enum' href='iron/mime/enum.TopLevel.html' title='iron::mime::TopLevel'>TopLevel</a>","<a class='stability Experimental' title='Experimental'></a>impl <a class='trait' href='http://doc.rust-lang.org/nightly/core/clone/trait.Clone.html' title='core::clone::Clone'>Clone</a> for <a class='enum' href='iron/mime/enum.SubLevel.html' title='iron::mime::SubLevel'>SubLevel</a>","<a class='stability Experimental' title='Experimental'></a>impl <a class='trait' href='http://doc.rust-lang.org/nightly/core/clone/trait.Clone.html' title='core::clone::Clone'>Clone</a> for <a class='enum' href='iron/mime/enum.Attr.html' title='iron::mime::Attr'>Attr</a>","<a class='stability Experimental' title='Experimental'></a>impl <a class='trait' href='http://doc.rust-lang.org/nightly/core/clone/trait.Clone.html' title='core::clone::Clone'>Clone</a> for <a class='enum' href='iron/mime/enum.Value.html' title='iron::mime::Value'>Value</a>","<a class='stability Unmarked' title='No stability level'></a>impl <a class='trait' href='http://doc.rust-lang.org/nightly/core/clone/trait.Clone.html' title='core::clone::Clone'>Clone</a> for <a class='struct' href='iron/errors/struct.FileError.html' title='iron::errors::FileError'>FileError</a>","<a class='stability Unmarked' title='No stability level'></a>impl <a class='trait' href='http://doc.rust-lang.org/nightly/core/clone/trait.Clone.html' title='core::clone::Clone'>Clone</a> for <a class='struct' href='iron/struct.Url.html' title='iron::Url'>Url</a>",];implementors['lib'] = ["<a class='stability Stable' title='Stable'></a>impl <a class='trait' href='http://doc.rust-lang.org/nightly/core/clone/trait.Clone.html' title='core::clone::Clone'>Clone</a> for CharSet","<a class='stability Stable' title='Stable'></a>impl <a class='trait' href='http://doc.rust-lang.org/nightly/core/clone/trait.Clone.html' title='core::clone::Clone'>Clone</a> for CharacterClass","<a class='stability Stable' title='Stable'></a>impl <a class='trait' href='http://doc.rust-lang.org/nightly/core/clone/trait.Clone.html' title='core::clone::Clone'>Clone</a> for Thread","<a class='stability Stable' title='Stable'></a>impl&lt;T&gt; <a class='trait' href='http://doc.rust-lang.org/nightly/core/clone/trait.Clone.html' title='core::clone::Clone'>Clone</a> for State&lt;T&gt;","<a class='stability Stable' title='Stable'></a>impl&lt;T&gt; <a class='trait' href='http://doc.rust-lang.org/nightly/core/clone/trait.Clone.html' title='core::clone::Clone'>Clone</a> for NFA&lt;T&gt;","<a class='stability Stable' title='Stable'></a>impl <a class='trait' href='http://doc.rust-lang.org/nightly/core/clone/trait.Clone.html' title='core::clone::Clone'>Clone</a> for Metadata","<a class='stability Stable' title='Stable'></a>impl <a class='trait' href='http://doc.rust-lang.org/nightly/core/clone/trait.Clone.html' title='core::clone::Clone'>Clone</a> for <a class='struct' href='lib/struct.Params.html' title='lib::Params'>Params</a>","<a class='stability Stable' title='Stable'></a>impl&lt;T&gt; <a class='trait' href='http://doc.rust-lang.org/nightly/core/clone/trait.Clone.html' title='core::clone::Clone'>Clone</a> for Router&lt;T&gt;",];implementors['bodyparser'] = ["<a class='stability Stable' title='Stable'></a>impl <a class='trait' href='http://doc.rust-lang.org/nightly/core/clone/trait.Clone.html' title='core::clone::Clone'>Clone</a> for <a class='enum' href='bodyparser/enum.BodyErrorCause.html' title='bodyparser::BodyErrorCause'>BodyErrorCause</a>","<a class='stability Stable' title='Stable'></a>impl <a class='trait' href='http://doc.rust-lang.org/nightly/core/clone/trait.Clone.html' title='core::clone::Clone'>Clone</a> for <a class='struct' href='bodyparser/struct.BodyError.html' title='bodyparser::BodyError'>BodyError</a>","<a class='stability Stable' title='Stable'></a>impl <a class='trait' href='http://doc.rust-lang.org/nightly/core/clone/trait.Clone.html' title='core::clone::Clone'>Clone</a> for <a class='struct' href='bodyparser/struct.Json.html' title='bodyparser::Json'>Json</a>","<a class='stability Stable' title='Stable'></a>impl&lt;T: <a class='trait' href='http://doc.rust-lang.org/nightly/core/clone/trait.Clone.html' title='core::clone::Clone'>Clone</a> + <a class='trait' href='http://doc.rust-lang.org/rustc-serialize/rustc-serialize/serialize/trait.Decodable.html' title='rustc-serialize::serialize::Decodable'>Decodable</a>&gt; <a class='trait' href='http://doc.rust-lang.org/nightly/core/clone/trait.Clone.html' title='core::clone::Clone'>Clone</a> for <a class='struct' href='bodyparser/struct.Struct.html' title='bodyparser::Struct'>Struct</a>&lt;T&gt;",];implementors['bodyparser'] = ["<a class='stability Stable' title='Stable'></a>impl <a class='trait' href='http://doc.rust-lang.org/nightly/core/clone/trait.Clone.html' title='core::clone::Clone'>Clone</a> for <a class='enum' href='bodyparser/enum.BodyErrorCause.html' title='bodyparser::BodyErrorCause'>BodyErrorCause</a>","<a class='stability Stable' title='Stable'></a>impl <a class='trait' href='http://doc.rust-lang.org/nightly/core/clone/trait.Clone.html' title='core::clone::Clone'>Clone</a> for <a class='struct' href='bodyparser/struct.BodyError.html' title='bodyparser::BodyError'>BodyError</a>","<a class='stability Stable' title='Stable'></a>impl <a class='trait' href='http://doc.rust-lang.org/nightly/core/clone/trait.Clone.html' title='core::clone::Clone'>Clone</a> for <a class='struct' href='bodyparser/struct.Json.html' title='bodyparser::Json'>Json</a>","<a class='stability Stable' title='Stable'></a>impl&lt;T: <a class='trait' href='http://doc.rust-lang.org/nightly/core/clone/trait.Clone.html' title='core::clone::Clone'>Clone</a> + <a class='trait' href='http://doc.rust-lang.org/rustc-serialize/rustc-serialize/serialize/trait.Decodable.html' title='rustc-serialize::serialize::Decodable'>Decodable</a>&gt; <a class='trait' href='http://doc.rust-lang.org/nightly/core/clone/trait.Clone.html' title='core::clone::Clone'>Clone</a> for <a class='struct' href='bodyparser/struct.Struct.html' title='bodyparser::Struct'>Struct</a>&lt;T&gt;",];

            if (window.register_implementors) {
                window.register_implementors(implementors);
            } else {
                window.pending_implementors = implementors;
            }
        
})()
