var searchIndex = {};
searchIndex['iron'] = {"items":[[0,"","iron","The main crate for the Iron library."],[1,"Request","","The `Request` given to all `Middleware`."],[11,"url","","The requested URL.",0],[11,"remote_addr","","The originating address of the request.",0],[11,"headers","","The request headers.",0],[11,"body","","The request body.",0],[11,"method","","The request method.",0],[11,"extensions","","Extensible storage for data passed between middleware.",0],[1,"Url","","HTTP/HTTPS URL type for Iron."],[11,"scheme","","The lower-cased scheme of the URL, typically \"http\" or \"https\".",1],[11,"host","","The host field of the URL, probably a domain.",1],[11,"port","","The connection port.",1],[11,"path","","The URL path, the resource to be accessed.",1],[11,"username","","The URL username field, from the userinfo section of the URL.",1],[11,"password","","The URL password field, from the userinfo section of the URL.",1],[11,"query","","The URL query string.",1],[11,"fragment","","The URL fragment.",1],[1,"Response","","The response representation given to `Middleware`"],[11,"body","","The body of the response.",2],[11,"headers","","The headers of the response.",2],[11,"status","","The response status-code.",2],[11,"extensions","","A TypeMap to be used as an extensible storage for data\nassociated with this Response.",2],[1,"ChainBuilder","","The default Chain used in Iron."],[1,"Iron","","The primary entrance point to `Iron`, a `struct` to instantiate a new server."],[11,"handler","","Iron contains a `Handler`, which it uses to create responses for client\nrequests.",3],[10,"clone","","",1],[10,"eq","","",1],[10,"ne","","",1],[10,"parse","","Create a URL from a string.",1],[10,"from_generic_url","","Create a `Url` from a `rust-url` `Url`.",1],[10,"fmt","","",1],[10,"encode","","",1],[10,"decode","","",1],[10,"fmt","","",0],[10,"from_http","","Create a request from an HttpRequest.",0],[10,"extensions","","",0],[10,"extensions_mut","","",0],[10,"load","http::server::request","Get a response from an open socket.",4],[10,"new","http::buffer","",5],[10,"poke_byte","","Poke a single byte back so it will be read next. For this to make sense, you must have just\nread that byte. If `self.pos` is 0 and `self.max` is not 0 (i.e. if the buffer is just\nfilled\nVery great caution must be used in calling this as it will fail if `self.pos` is 0.",5],[10,"read_byte","","Slightly faster implementation of read_byte than that which is provided by ReaderUtil\n(which just uses `read()`)",5],[10,"finish_response","","Finish off writing a response: this flushes the writer and in case of chunked\nTransfer-Encoding writes the ending zero-length chunk to indicate completion.",5],[10,"read","","Read at most N bytes into `buf`, where N is the minimum of `buf.len()` and the buffer size.",5],[10,"read_at_least","","",5],[10,"read_byte","","",5],[10,"push","","",5],[10,"push_at_least","","",5],[10,"read_exact","","",5],[10,"read_to_end","","",5],[10,"read_to_string","","",5],[10,"bytes","","",5],[10,"read_le_uint_n","","",5],[10,"read_le_int_n","","",5],[10,"read_be_uint_n","","",5],[10,"read_be_int_n","","",5],[10,"read_le_uint","","",5],[10,"read_le_int","","",5],[10,"read_be_uint","","",5],[10,"read_be_int","","",5],[10,"read_be_u64","","",5],[10,"read_be_u32","","",5],[10,"read_be_u16","","",5],[10,"read_be_i64","","",5],[10,"read_be_i32","","",5],[10,"read_be_i16","","",5],[10,"read_be_f64","","",5],[10,"read_be_f32","","",5],[10,"read_le_u64","","",5],[10,"read_le_u32","","",5],[10,"read_le_u16","","",5],[10,"read_le_i64","","",5],[10,"read_le_i32","","",5],[10,"read_le_i16","","",5],[10,"read_le_f64","","",5],[10,"read_le_f32","","",5],[10,"read_u8","","",5],[10,"read_i8","","",5],[10,"by_ref","","",5],[10,"write","","",5],[10,"flush","","",5],[10,"flush","","",5],[10,"write_fmt","","",5],[10,"write_str","","",5],[10,"write_line","","",5],[10,"write_char","","",5],[10,"write_int","","",5],[10,"write_uint","","",5],[10,"write_le_uint","","",5],[10,"write_le_int","","",5],[10,"write_be_uint","","",5],[10,"write_be_int","","",5],[10,"write_be_u64","","",5],[10,"write_be_u32","","",5],[10,"write_be_u16","","",5],[10,"write_be_i64","","",5],[10,"write_be_i32","","",5],[10,"write_be_i16","","",5],[10,"write_be_f64","","",5],[10,"write_be_f32","","",5],[10,"write_le_u64","","",5],[10,"write_le_u32","","",5],[10,"write_le_u16","","",5],[10,"write_le_i64","","",5],[10,"write_le_i32","","",5],[10,"write_le_i16","","",5],[10,"write_le_f64","","",5],[10,"write_le_f32","","",5],[10,"write_u8","","",5],[10,"write_i8","","",5],[10,"by_ref","","",5],[10,"new","http::client::request","Create a `RequestWriter` writing to the specified location",6],[10,"new_request","","",6],[10,"try_connect","","Connect to the remote host if not already connected.",6],[10,"connect","","Connect to the remote host; fails if already connected.\nReturns ``true`` upon success and ``false`` upon failure (also use conditions).",6],[10,"try_write_headers","","Write the Request-Line and headers of the response, if we have not already done so.",6],[10,"write_headers","","Write the Status-Line and headers of the response, in preparation for writing the body.",6],[10,"read_response","","Send the request and construct a `ResponseReader` out of it.",6],[10,"write","","",6],[10,"flush","","",6],[10,"flush","","",6],[10,"write_fmt","","",6],[10,"write_str","","",6],[10,"write_line","","",6],[10,"write_char","","",6],[10,"write_int","","",6],[10,"write_uint","","",6],[10,"write_le_uint","","",6],[10,"write_le_int","","",6],[10,"write_be_uint","","",6],[10,"write_be_int","","",6],[10,"write_be_u64","","",6],[10,"write_be_u32","","",6],[10,"write_be_u16","","",6],[10,"write_be_i64","","",6],[10,"write_be_i32","","",6],[10,"write_be_i16","","",6],[10,"write_be_f64","","",6],[10,"write_be_f32","","",6],[10,"write_le_u64","","",6],[10,"write_le_u32","","",6],[10,"write_le_u16","","",6],[10,"write_le_i64","","",6],[10,"write_le_i32","","",6],[10,"write_le_i16","","",6],[10,"write_le_f64","","",6],[10,"write_le_f32","","",6],[10,"write_u8","","",6],[10,"write_i8","","",6],[10,"by_ref","","",6],[10,"construct","http::client::response","",7],[10,"read","","",7],[10,"read_at_least","","",7],[10,"read_byte","","",7],[10,"push","","",7],[10,"push_at_least","","",7],[10,"read_exact","","",7],[10,"read_to_end","","",7],[10,"read_to_string","","",7],[10,"bytes","","",7],[10,"read_le_uint_n","","",7],[10,"read_le_int_n","","",7],[10,"read_be_uint_n","","",7],[10,"read_be_int_n","","",7],[10,"read_le_uint","","",7],[10,"read_le_int","","",7],[10,"read_be_uint","","",7],[10,"read_be_int","","",7],[10,"read_be_u64","","",7],[10,"read_be_u32","","",7],[10,"read_be_u16","","",7],[10,"read_be_i64","","",7],[10,"read_be_i32","","",7],[10,"read_be_i16","","",7],[10,"read_be_f64","","",7],[10,"read_be_f32","","",7],[10,"read_le_u64","","",7],[10,"read_le_u32","","",7],[10,"read_le_u16","","",7],[10,"read_le_i64","","",7],[10,"read_le_i32","","",7],[10,"read_le_i16","","",7],[10,"read_le_f64","","",7],[10,"read_le_f32","","",7],[10,"read_u8","","",7],[10,"read_i8","","",7],[10,"by_ref","","",7],[10,"connect","http::client::sslclients::openssl","",8],[10,"read","","",8],[10,"read_at_least","","",8],[10,"read_byte","","",8],[10,"push","","",8],[10,"push_at_least","","",8],[10,"read_exact","","",8],[10,"read_to_end","","",8],[10,"read_to_string","","",8],[10,"bytes","","",8],[10,"read_le_uint_n","","",8],[10,"read_le_int_n","","",8],[10,"read_be_uint_n","","",8],[10,"read_be_int_n","","",8],[10,"read_le_uint","","",8],[10,"read_le_int","","",8],[10,"read_be_uint","","",8],[10,"read_be_int","","",8],[10,"read_be_u64","","",8],[10,"read_be_u32","","",8],[10,"read_be_u16","","",8],[10,"read_be_i64","","",8],[10,"read_be_i32","","",8],[10,"read_be_i16","","",8],[10,"read_be_f64","","",8],[10,"read_be_f32","","",8],[10,"read_le_u64","","",8],[10,"read_le_u32","","",8],[10,"read_le_u16","","",8],[10,"read_le_i64","","",8],[10,"read_le_i32","","",8],[10,"read_le_i16","","",8],[10,"read_le_f64","","",8],[10,"read_le_f32","","",8],[10,"read_u8","","",8],[10,"read_i8","","",8],[10,"by_ref","","",8],[10,"write","","",8],[10,"flush","","",8],[10,"flush","","",8],[10,"write_fmt","","",8],[10,"write_str","","",8],[10,"write_line","","",8],[10,"write_char","","",8],[10,"write_int","","",8],[10,"write_uint","","",8],[10,"write_le_uint","","",8],[10,"write_le_int","","",8],[10,"write_be_uint","","",8],[10,"write_be_int","","",8],[10,"write_be_u64","","",8],[10,"write_be_u32","","",8],[10,"write_be_u16","","",8],[10,"write_be_i64","","",8],[10,"write_be_i32","","",8],[10,"write_be_i16","","",8],[10,"write_be_f64","","",8],[10,"write_be_f32","","",8],[10,"write_le_u64","","",8],[10,"write_le_u32","","",8],[10,"write_le_u16","","",8],[10,"write_le_i64","","",8],[10,"write_le_i32","","",8],[10,"write_le_i16","","",8],[10,"write_le_f64","","",8],[10,"write_le_f32","","",8],[10,"write_u8","","",8],[10,"write_i8","","",8],[10,"by_ref","","",8],[10,"new","http::server::request","",9],[10,"read_request_line","","",9],[10,"read_header","","Read a header (name, value) pair.",9],[10,"read","","",9],[10,"read_at_least","","",9],[10,"read_byte","","",9],[10,"push","","",9],[10,"push_at_least","","",9],[10,"read_exact","","",9],[10,"read_to_end","","",9],[10,"read_to_string","","",9],[10,"bytes","","",9],[10,"read_le_uint_n","","",9],[10,"read_le_int_n","","",9],[10,"read_be_uint_n","","",9],[10,"read_be_int_n","","",9],[10,"read_le_uint","","",9],[10,"read_le_int","","",9],[10,"read_be_uint","","",9],[10,"read_be_int","","",9],[10,"read_be_u64","","",9],[10,"read_be_u32","","",9],[10,"read_be_u16","","",9],[10,"read_be_i64","","",9],[10,"read_be_i32","","",9],[10,"read_be_i16","","",9],[10,"read_be_f64","","",9],[10,"read_be_f32","","",9],[10,"read_le_u64","","",9],[10,"read_le_u32","","",9],[10,"read_le_u16","","",9],[10,"read_le_i64","","",9],[10,"read_le_i32","","",9],[10,"read_le_i16","","",9],[10,"read_le_f64","","",9],[10,"read_le_f32","","",9],[10,"read_u8","","",9],[10,"read_i8","","",9],[10,"by_ref","","",9],[10,"assert_receiver_is_total_eq","","",10],[10,"eq","","",10],[10,"ne","","",10],[10,"ne","","",10],[10,"fmt","","",10],[10,"new","http::server::response","Create a `ResponseWriter` writing to the specified location",11],[10,"write_content_auto","","Write a response with the specified Content-Type and content; the Content-Length header is\nset based upon the contents",11],[10,"try_write_headers","","Write the Status-Line and headers of the response, if we have not already done so.",11],[10,"write_headers","","Write the Status-Line and headers of the response, in preparation for writing the body.",11],[10,"finish_response","","",11],[10,"write","","",11],[10,"flush","","",11],[10,"flush","","",11],[10,"write_fmt","","",11],[10,"write_str","","",11],[10,"write_line","","",11],[10,"write_char","","",11],[10,"write_int","","",11],[10,"write_uint","","",11],[10,"write_le_uint","","",11],[10,"write_le_int","","",11],[10,"write_be_uint","","",11],[10,"write_be_int","","",11],[10,"write_be_u64","","",11],[10,"write_be_u32","","",11],[10,"write_be_u16","","",11],[10,"write_be_i64","","",11],[10,"write_be_i32","","",11],[10,"write_be_i16","","",11],[10,"write_be_f64","","",11],[10,"write_be_f32","","",11],[10,"write_le_u64","","",11],[10,"write_le_u32","","",11],[10,"write_le_u16","","",11],[10,"write_le_i64","","",11],[10,"write_le_i32","","",11],[10,"write_le_i16","","",11],[10,"write_le_f64","","",11],[10,"write_le_f32","","",11],[10,"write_u8","","",11],[10,"write_i8","","",11],[10,"by_ref","","",11],[10,"hash","http::method","",12],[10,"clone","","",12],[10,"clone_from","","",12],[10,"assert_receiver_is_total_eq","","",12],[10,"eq","","",12],[10,"ne","","",12],[10,"ne","","",12],[10,"from_str","","Get a *known* `Method` from an *ASCII* string, regardless of case.",12],[10,"fmt","","",12],[10,"from_str_or_new","","Get a `Method` from an *ASCII* string.",12],[10,"assert_receiver_is_total_eq","http::headers::accept_ranges","",13],[10,"eq","","",13],[10,"ne","","",13],[10,"ne","","",13],[10,"clone","","",13],[10,"clone_from","","",13],[10,"assert_receiver_is_total_eq","","",14],[10,"eq","","",14],[10,"ne","","",14],[10,"ne","","",14],[10,"clone","","",14],[10,"clone_from","","",14],[10,"from_stream","","",14],[10,"to_stream","","",14],[10,"http_value","","",14],[10,"to_stream","","",14],[10,"assert_receiver_is_total_eq","http::headers::connection","",15],[10,"eq","","",15],[10,"ne","","",15],[10,"ne","","",15],[10,"clone","","",15],[10,"clone_from","","",15],[10,"fmt","","",15],[10,"from_stream","","",15],[10,"to_stream","","",15],[10,"http_value","","",15],[10,"to_stream","","",15],[10,"assert_receiver_is_total_eq","http::headers::content_type","",16],[10,"eq","","",16],[10,"ne","","",16],[10,"ne","","",16],[10,"clone","","",16],[10,"clone_from","","",16],[10,"new","","",16],[10,"fmt","","",16],[10,"from_stream","","",16],[10,"to_stream","","",16],[10,"http_value","","",16],[10,"to_stream","","",16],[10,"assert_receiver_is_total_eq","http::headers::etag","",17],[10,"eq","","",17],[10,"ne","","",17],[10,"ne","","",17],[10,"clone","","",17],[10,"clone_from","","",17],[10,"fmt","","",17],[10,"from_stream","","",17],[10,"to_stream","","",17],[10,"http_value","","",17],[10,"to_stream","","",17],[10,"assert_receiver_is_total_eq","http::headers::host","",18],[10,"eq","","",18],[10,"ne","","",18],[10,"ne","","",18],[10,"clone","","",18],[10,"clone_from","","",18],[10,"fmt","","",18],[10,"from_stream","","",18],[10,"http_value","","",18],[10,"to_stream","","",18],[10,"assert_receiver_is_total_eq","http::headers::transfer_encoding","",19],[10,"eq","","",19],[10,"ne","","",19],[10,"ne","","",19],[10,"clone","","",19],[10,"clone_from","","",19],[10,"from_stream","","",19],[10,"to_stream","","",19],[10,"http_value","","",19],[10,"to_stream","","",19],[10,"assert_receiver_is_total_eq","http::headers","",20],[10,"eq","","",20],[10,"ne","","",20],[10,"ne","","",20],[10,"clone","","",20],[10,"clone_from","","",20],[10,"assert_receiver_is_total_eq","","",21],[10,"eq","","",21],[10,"ne","","",21],[10,"ne","","",21],[10,"new","","",22],[10,"verify_consumed","","Check that the entire header value has been consumed.",22],[10,"some_if_consumed","","Turn a constructed header value into an Option: Some(value) if the header value is consumed\nor None if it is not, thus indicating: \"I'm finished and expect nothing more. Anything more\nis an error.\"",22],[10,"consume_optional_lws","","Consume optional `*LWS`. That is, zero or more of SP and HT, until it\ngets to something other than SP and HT or gets to the end of the header.",22],[10,"consume_lws","","Consume `1*LWS`. That is, one or more of SP and HT, until it gets to\nsomething other than SP and HT or gets to the end of the header.",22],[10,"consume_comma_lws","","Return values:\n- CommaConsumed if there was a comma and it was consumed;\n- EndOfValue if the header value has been completely consumed;\n- ErrCommaNotFound if the next thing wasn't a comma (this is an error state)",22],[10,"read_quoted_string","","Read a quoted-string from the current position.\nIf the quoted-string is not begun immediately or the header ends before it is completed,\nthen None is returned; TODO: decide if I can return the bytes read (at present, escapes and\ndouble quote would be lost if I did that).",22],[10,"read_token_or_quoted_string","","Read a token (RFC 2616 definition) from the header value.",22],[10,"read_token","","Read a token (RFC 2616 definition) from the header value.",22],[10,"next","","",22],[10,"size_hint","","",22],[10,"chain","","",22],[10,"zip","","",22],[10,"map","","",22],[10,"filter","","",22],[10,"filter_map","","",22],[10,"enumerate","","",22],[10,"peekable","","",22],[10,"skip_while","","",22],[10,"take_while","","",22],[10,"skip","","",22],[10,"take","","",22],[10,"scan","","",22],[10,"flat_map","","",22],[10,"fuse","","",22],[10,"inspect","","",22],[10,"by_ref","","",22],[10,"advance","","",22],[10,"collect","","",22],[10,"nth","","",22],[10,"last","","",22],[10,"fold","","",22],[10,"count","","",22],[10,"all","","",22],[10,"any","","",22],[10,"find","","",22],[10,"position","","",22],[10,"max_by","","",22],[10,"min_by","","",22],[10,"from_stream","collections::vec","",23],[10,"to_stream","","",23],[10,"http_value","","",23],[10,"to_stream","","",23],[10,"from_stream","collections::string","",24],[10,"to_stream","","",24],[10,"http_value","","",24],[10,"to_stream","","",24],[10,"from_stream","url","",25],[10,"http_value","","",25],[10,"to_stream","","",25],[10,"from_stream","http::method","",12],[10,"http_value","","",12],[10,"to_stream","","",12],[10,"from_stream","time","",26],[10,"http_value","","",26],[10,"to_stream","","",26],[10,"clone","http::headers::request","",27],[10,"clone_from","","",27],[10,"new","","",27],[10,"insert","","Consume a header, putting it into this structure.",27],[10,"insert_raw","","Insert a raw header into the collection.\nThis will return an error if the value is not valid UTF-8 or if the name is that\nof a strongly-typed header and the value is not a valid value for that header.",27],[10,"iter","","",27],[10,"write_all","","Write all the headers to a writer. This includes an extra \\r\\n at the end to\nsignal end of headers.",27],[10,"next","","",28],[10,"size_hint","","",28],[10,"chain","","",28],[10,"zip","","",28],[10,"map","","",28],[10,"filter","","",28],[10,"filter_map","","",28],[10,"enumerate","","",28],[10,"peekable","","",28],[10,"skip_while","","",28],[10,"take_while","","",28],[10,"skip","","",28],[10,"take","","",28],[10,"scan","","",28],[10,"flat_map","","",28],[10,"fuse","","",28],[10,"inspect","","",28],[10,"by_ref","","",28],[10,"advance","","",28],[10,"collect","","",28],[10,"nth","","",28],[10,"last","","",28],[10,"fold","","",28],[10,"count","","",28],[10,"all","","",28],[10,"any","","",28],[10,"find","","",28],[10,"position","","",28],[10,"max_by","","",28],[10,"min_by","","",28],[10,"header_name","","",29],[10,"header_value","","",29],[10,"write_header","","",29],[10,"value_from_stream","","",29],[10,"clone","http::headers::response","",30],[10,"clone_from","","",30],[10,"new","","",30],[10,"insert","","Consume a header, putting it into this structure.",30],[10,"insert_raw","","Insert a raw header into the collection.\nThis will return an error if the value is not valid UTF-8 or if the name is that\nof a strongly-typed header and the value is not a valid value for that header.",30],[10,"iter","","",30],[10,"write_all","","Write all the headers to a writer. This includes an extra \\r\\n at the end to\nsignal end of headers.",30],[10,"next","","",31],[10,"size_hint","","",31],[10,"chain","","",31],[10,"zip","","",31],[10,"map","","",31],[10,"filter","","",31],[10,"filter_map","","",31],[10,"enumerate","","",31],[10,"peekable","","",31],[10,"skip_while","","",31],[10,"take_while","","",31],[10,"skip","","",31],[10,"take","","",31],[10,"scan","","",31],[10,"flat_map","","",31],[10,"fuse","","",31],[10,"inspect","","",31],[10,"by_ref","","",31],[10,"advance","","",31],[10,"collect","","",31],[10,"nth","","",31],[10,"last","","",31],[10,"fold","","",31],[10,"count","","",31],[10,"all","","",31],[10,"any","","",31],[10,"find","","",31],[10,"position","","",31],[10,"max_by","","",31],[10,"min_by","","",31],[10,"header_name","","",32],[10,"header_value","","",32],[10,"write_header","","",32],[10,"value_from_stream","","",32],[10,"fmt","http::rfc2616::content_coding","",33],[10,"from_str","","",33],[10,"fmt","http::rfc2616::transfer_coding","",34],[10,"clone","http::status","",35],[10,"clone_from","","",35],[10,"eq","","",35],[10,"ne","","",35],[10,"ne","","",35],[10,"assert_receiver_is_total_eq","","",35],[10,"code","","Get the status code",35],[10,"reason","","Get the reason phrase",35],[10,"from_code_and_reason","","Get a status from the code and reason",35],[10,"fmt","","",35],[10,"fmt","","",35],[10,"to_i64","","Equivalent to `Some(self.code() as i64)`",35],[10,"to_u64","","Equivalent to `Some(self.code() as u64)`",35],[10,"to_int","","",35],[10,"to_i8","","",35],[10,"to_i16","","",35],[10,"to_i32","","",35],[10,"to_uint","","",35],[10,"to_u8","","",35],[10,"to_u16","","",35],[10,"to_u32","","",35],[10,"to_f32","","",35],[10,"to_f64","","",35],[10,"from_i64","","Get a *registered* status code from the number of its status code.",35],[10,"from_u64","","Get a *registered* status code from the number of its status code.",35],[10,"from_int","","",35],[10,"from_i8","","",35],[10,"from_i16","","",35],[10,"from_i32","","",35],[10,"from_uint","","",35],[10,"from_u8","","",35],[10,"from_u16","","",35],[10,"from_u32","","",35],[10,"from_f32","","",35],[10,"from_f64","","",35],[10,"new","iron","Construct a blank Response",2],[10,"status","","Create a new response with the status.",2],[10,"with","","Create a new response with the specified body and status.",2],[10,"from_file","","Create a response from a file on disk.",2],[10,"fmt","","",2],[10,"extensions","","",2],[10,"extensions_mut","","",2],[10,"listen","","Kick off the server process.",3],[10,"new","","Instantiate a new instance of `Iron`.",3],[10,"new","","Construct a new ChainBuilder from a `Handler`.",36],[10,"new","","",36],[10,"link","","",36],[10,"link_before","","",36],[10,"link_after","","",36],[10,"around","","",36],[10,"call","","",36],[10,"catch","","",36],[10,"call","alloc::boxed","",37],[10,"catch","","",37],[10,"call","alloc::arc","",38],[10,"catch","","",38],[4,"IronError","iron",""],[4,"IronResult","",""],[6,"BeforeMiddleware","","`BeforeMiddleware` are fired before a `Handler` is called inside of a Chain."],[9,"before","","Do whatever work this middleware should do with a `Request` object.",39],[10,"catch","","Try to `catch` an error thrown by this Middleware or a previous `BeforeMiddleware`.",39],[6,"AfterMiddleware","","`AfterMiddleware` are fired after a `Handler` is called inside of a Chain."],[9,"after","","Do whatever work this middleware needs to do with both a `Request` and `Response` objects.",40],[10,"catch","","Try to catch an error thrown by previous `AfterMiddleware`, the `Handler`, or a previous\n`BeforeMiddleware`.",40],[6,"AroundMiddleware","","AroundMiddleware are used to wrap and replace the `Handler` in a `Chain`."],[9,"around","","Produce a `Handler` from this `AroundMiddleware` given another `Handler`.",41],[6,"Handler","","`Handler`s are responsible for handling requests by creating Responses from Requests."],[9,"call","","Produce a `Response` from a Request, with the possibility of error.",42],[10,"catch","","If `Handler`'s call method produces an Err, then this method is called\nto produce a `Response` and possibly handle the error.",42],[6,"Chain","","Chain's hold `BeforeMiddleware`, a `Handler`, and `AfterMiddleware` and are responsible\nfor correctly dispatching a `Request` through them."],[9,"new","","Create a new Chain from a `Handler`.",43],[9,"link","","Link both a before and after middleware to the chain at once.",43],[9,"link_before","","Link a `BeforeMiddleware` to the Chain.",43],[9,"link_after","","Link a `AfterMiddleware` to the Chain.",43],[9,"around","","Wrap the Chain's `Handler` using an AroundMiddleware.",43],[10,"new","typemap","Create a new, empty TypeMap.",44],[10,"insert","","Insert a value into the map with a specified key type.",44],[10,"find","","Find a value in the map and get a reference to it.",44],[10,"find_mut","","Find a value in the map and get a mutable reference to it.",44],[10,"contains","","Check if a key has an associated value stored in the map.",44],[10,"remove","","Remove a value from the map.",44],[10,"len","","",44],[10,"is_empty","","",44],[10,"clear","","",44],[1,"TypeMap","iron","A map keyed by types."],[0,"status","",""],[2,"Status","iron::status","HTTP status code"],[12,"Continue","","",35],[12,"SwitchingProtocols","","",35],[12,"Processing","","",35],[12,"Ok","","",35],[12,"Created","","",35],[12,"Accepted","","",35],[12,"NonAuthoritativeInformation","","",35],[12,"NoContent","","",35],[12,"ResetContent","","",35],[12,"PartialContent","","",35],[12,"MultiStatus","","",35],[12,"AlreadyReported","","",35],[12,"ImUsed","","",35],[12,"MultipleChoices","","",35],[12,"MovedPermanently","","",35],[12,"Found","","",35],[12,"SeeOther","","",35],[12,"NotModified","","",35],[12,"UseProxy","","",35],[12,"SwitchProxy","","",35],[12,"TemporaryRedirect","","",35],[12,"PermanentRedirect","","",35],[12,"BadRequest","","",35],[12,"Unauthorized","","",35],[12,"PaymentRequired","","",35],[12,"Forbidden","","",35],[12,"NotFound","","",35],[12,"MethodNotAllowed","","",35],[12,"NotAcceptable","","",35],[12,"ProxyAuthenticationRequired","","",35],[12,"RequestTimeout","","",35],[12,"Conflict","","",35],[12,"Gone","","",35],[12,"LengthRequired","","",35],[12,"PreconditionFailed","","",35],[12,"RequestEntityTooLarge","","",35],[12,"RequestUriTooLong","","",35],[12,"UnsupportedMediaType","","",35],[12,"RequestedRangeNotSatisfiable","","",35],[12,"ExpectationFailed","","",35],[12,"ImATeapot","","",35],[12,"AuthenticationTimeout","","",35],[12,"UnprocessableEntity","","",35],[12,"Locked","","",35],[12,"FailedDependency","","",35],[12,"MethodFailure","","",35],[12,"UnorderedCollection","","",35],[12,"UpgradeRequired","","",35],[12,"PreconditionRequired","","",35],[12,"TooManyRequests","","",35],[12,"RequestHeaderFieldsTooLarge","","",35],[12,"UnavailableForLegalReasons","","",35],[12,"InternalServerError","","",35],[12,"NotImplemented","","",35],[12,"BadGateway","","",35],[12,"ServiceUnavailable","","",35],[12,"GatewayTimeout","","",35],[12,"HttpVersionNotSupported","","",35],[12,"VariantAlsoNegotiates","","",35],[12,"InsufficientStorage","","",35],[12,"LoopDetected","","",35],[12,"NotExtended","","",35],[12,"NetworkAuthenticationRequired","","",35],[12,"UnregisteredStatus","","",35],[0,"method","iron",""],[2,"Method","iron::method","HTTP methods, as defined in RFC 2616, §5.1.1."],[12,"Options","","",12],[12,"Get","","",12],[12,"Head","","",12],[12,"Post","","",12],[12,"Put","","",12],[12,"Delete","","",12],[12,"Trace","","",12],[12,"Connect","","",12],[12,"Patch","","",12],[12,"ExtensionMethod","","",12],[0,"headers","iron","Types and utilities for working with headers in HTTP requests and responses."],[2,"HeaderLineErr","iron::headers",""],[12,"EndOfFile","","",45],[12,"EndOfHeaders","","",45],[12,"MalformedHeaderValue","","",45],[12,"MalformedHeaderSyntax","","",45],[0,"test_utils","",""],[3,"from_stream_with_str","iron::headers::test_utils",""],[3,"to_stream_into_str","",""],[3,"assert_invalid","",""],[3,"assert_conversion_correct","",""],[3,"assert_interpretation_correct","",""],[0,"serialization_utils","iron::headers","Utility functions for assisting with conversion of headers from and to the HTTP text form."],[3,"normalise_header_name","iron::headers::serialization_utils","Normalise an HTTP header name."],[3,"comma_split","","Split a value on commas, as is common for HTTP headers."],[3,"comma_split_iter","",""],[6,"WriterUtil","",""],[9,"write_maybe_quoted_string","","",46],[9,"write_quoted_string","","",46],[9,"write_parameter","","",46],[9,"write_parameters","","",46],[9,"write_quality","","",46],[9,"write_token","","",46],[3,"comma_join","","Join a vector of values with commas, as is common for HTTP headers."],[3,"push_maybe_quoted_string","","Push a ( token | quoted-string ) onto a string and return it again"],[3,"maybe_quoted_string","","Make a string into a ( token | quoted-string ), preferring a token"],[3,"push_quoted_string","","Quote a string, to turn it into an RFC 2616 quoted-string"],[3,"quoted_string","","Quote a string, to turn it into an RFC 2616 quoted-string"],[3,"unquote_string","","Parse a quoted-string. Returns ``None`` if the string is not a valid quoted-string."],[3,"maybe_unquote_string","","Parse a ( token | quoted-string ). Returns ``None`` if it is not valid."],[3,"push_parameter","",""],[3,"push_parameters","",""],[0,"accept_ranges","iron::headers","The Accept-Ranges request header, defined in RFC 2616, Section 14.5."],[2,"RangeUnit","iron::headers::accept_ranges",""],[12,"Bytes","","",13],[12,"OtherRangeUnit","","",13],[2,"AcceptableRanges","",""],[12,"RangeUnits","","",14],[12,"NoAcceptableRanges","","",14],[0,"connection","iron::headers","The Connection general header, defined in RFC 2616, Section 14.10."],[2,"Connection","iron::headers::connection","A value for the Connection header. Note that should it be a ``Token``, the string is in\nnormalised header case (e.g. \"Keep-Alive\")."],[12,"Token","","",15],[12,"Close","","",15],[0,"content_type","iron::headers","The Content-Type entity header, defined in RFC 2616, Section 14.17."],[1,"MediaType","iron::headers::content_type",""],[11,"type_","","",16],[11,"subtype","","",16],[11,"parameters","","",16],[0,"etag","iron::headers",""],[1,"EntityTag","iron::headers::etag",""],[11,"weak","","",17],[11,"opaque_tag","","",17],[3,"weak_etag","",""],[3,"strong_etag","",""],[0,"host","iron::headers","The Host request header, defined in RFC 2616, Section 14.23."],[1,"Host","iron::headers::host","A simple little thing for the host of a request"],[11,"name","","The name of the host that was requested",18],[11,"port","","If unspecified, assume the default port was used (80 for HTTP, 443 for HTTPS).\nIn that case, you shouldn't need to worry about it in URLs that you build, provided you\ninclude the scheme.",18],[0,"transfer_encoding","iron::headers","The Transfer-Encoding request header, defined in RFC 2616, sections 14.41 and 3.6."],[2,"TransferCoding","iron::headers::transfer_encoding","RFC 2616, section 3.6:"],[12,"Chunked","","",19],[12,"TransferExtension","","",19],[4,"DeltaSeconds","iron::headers",""],[2,"ConsumeCommaLWSResult","",""],[12,"CommaConsumed","","",20],[12,"EndOfValue","","",20],[12,"ErrCommaNotFound","","",20],[6,"HeaderEnum","",""],[9,"header_name","","",47],[9,"header_value","","",47],[9,"write_header","","",47],[9,"value_from_stream","","Return values:",47],[3,"header_enum_from_stream","","Shifted out of being a default method to fix an ICE (not yet reported, TODO)"],[1,"HeaderValueByteIterator","","An iterator over the bytes of a header value.\nThis ensures one cannot read past the end of a header mistakenly and that linear white space is\nhandled correctly so that nothing else needs to worry about it. Any linear whitespace (multiple\nspaces outside of a quoted-string) is compacted into a single SP."],[11,"reader","","",22],[11,"next_byte","","This field serves two purposes. *During* iteration, it will typically be ``None``, but\ncertain cases will cause it to be a ``Some``, meaning that the next ``next()`` call will\nreturn that value rather than reading a new byte. At the *end* of iteration (after\n``next()`` has returned ``None``), it will be the extra byte which it has had to consume\nfrom the stream because of the possibility of linear white space of the form ``CR LF SP``.\nIt is guaranteed that if ``self.state == Finished`` this will be a ``Some``.",22],[11,"at_start","","",22],[6,"HeaderConvertible","","A datatype for headers."],[9,"from_stream","","Read a header value from an iterator over the raw value.",48],[9,"to_stream","","Write the HTTP value of the header to the stream.",48],[9,"http_value","","The value of the header as it would be written for an HTTP header.",48],[6,"CommaListHeaderConvertible","","A header with multiple comma-separated values. Implement this and a HeaderConvertible\nimplementation for Vec<T> is yours for free—just make sure your reading does not consume the\ncomma."],[0,"request","",""],[2,"Header","iron::headers::request",""],[12,"CacheControl","","",29],[12,"Connection","","",29],[12,"Date","","",29],[12,"Pragma","","",29],[12,"Trailer","","",29],[12,"TransferEncoding","","",29],[12,"Upgrade","","",29],[12,"Via","","",29],[12,"Warning","","",29],[12,"Accept","","",29],[12,"AcceptCharset","","",29],[12,"AcceptEncoding","","",29],[12,"AcceptLanguage","","",29],[12,"Authorization","","",29],[12,"Expect","","",29],[12,"From","","",29],[12,"Host","","",29],[12,"IfMatch","","",29],[12,"IfModifiedSince","","",29],[12,"IfNoneMatch","","",29],[12,"IfRange","","",29],[12,"IfUnmodifiedSince","","",29],[12,"MaxForwards","","",29],[12,"ProxyAuthorization","","",29],[12,"Range","","",29],[12,"Referer","","",29],[12,"Te","","",29],[12,"UserAgent","","",29],[12,"Allow","","",29],[12,"ContentEncoding","","",29],[12,"ContentLanguage","","",29],[12,"ContentLength","","",29],[12,"ContentLocation","","",29],[12,"ContentMd5","","",29],[12,"ContentRange","","",29],[12,"ContentType","","",29],[12,"Expires","","",29],[12,"LastModified","","",29],[12,"ExtensionHeader","","",29],[1,"HeaderCollection","",""],[11,"cache_control","","",27],[11,"connection","","",27],[11,"date","","",27],[11,"pragma","","",27],[11,"trailer","","",27],[11,"transfer_encoding","","",27],[11,"upgrade","","",27],[11,"via","","",27],[11,"warning","","",27],[11,"accept","","",27],[11,"accept_charset","","",27],[11,"accept_encoding","","",27],[11,"accept_language","","",27],[11,"authorization","","",27],[11,"expect","","",27],[11,"from","","",27],[11,"host","","",27],[11,"if_match","","",27],[11,"if_modified_since","","",27],[11,"if_none_match","","",27],[11,"if_range","","",27],[11,"if_unmodified_since","","",27],[11,"max_forwards","","",27],[11,"proxy_authorization","","",27],[11,"range","","",27],[11,"referer","","",27],[11,"te","","",27],[11,"user_agent","","",27],[11,"allow","","",27],[11,"content_encoding","","",27],[11,"content_language","","",27],[11,"content_length","","",27],[11,"content_location","","",27],[11,"content_md5","","",27],[11,"content_range","","",27],[11,"content_type","","",27],[11,"expires","","",27],[11,"last_modified","","",27],[11,"extensions","","",27],[1,"HeaderCollectionIterator","",""],[0,"response","iron::headers",""],[2,"Header","iron::headers::response",""],[12,"CacheControl","","",32],[12,"Connection","","",32],[12,"Date","","",32],[12,"Pragma","","",32],[12,"Trailer","","",32],[12,"TransferEncoding","","",32],[12,"Upgrade","","",32],[12,"Via","","",32],[12,"Warning","","",32],[12,"AcceptPatch","","",32],[12,"AcceptRanges","","",32],[12,"Age","","",32],[12,"ETag","","",32],[12,"Location","","",32],[12,"ProxyAuthenticate","","",32],[12,"RetryAfter","","",32],[12,"Server","","",32],[12,"Vary","","",32],[12,"WwwAuthenticate","","",32],[12,"Allow","","",32],[12,"ContentEncoding","","",32],[12,"ContentLanguage","","",32],[12,"ContentLength","","",32],[12,"ContentLocation","","",32],[12,"ContentMd5","","",32],[12,"ContentRange","","",32],[12,"ContentType","","",32],[12,"Expires","","",32],[12,"LastModified","","",32],[12,"ExtensionHeader","","",32],[1,"HeaderCollection","",""],[11,"cache_control","","",30],[11,"connection","","",30],[11,"date","","",30],[11,"pragma","","",30],[11,"trailer","","",30],[11,"transfer_encoding","","",30],[11,"upgrade","","",30],[11,"via","","",30],[11,"warning","","",30],[11,"accept_patch","","",30],[11,"accept_ranges","","",30],[11,"age","","",30],[11,"etag","","",30],[11,"location","","",30],[11,"proxy_authenticate","","",30],[11,"retry_after","","",30],[11,"server","","",30],[11,"vary","","",30],[11,"www_authenticate","","",30],[11,"allow","","",30],[11,"content_encoding","","",30],[11,"content_language","","",30],[11,"content_length","","",30],[11,"content_location","","",30],[11,"content_md5","","",30],[11,"content_range","","",30],[11,"content_type","","",30],[11,"expires","","",30],[11,"last_modified","","",30],[11,"extensions","","",30],[1,"HeaderCollectionIterator","",""],[6,"Plugin","iron","An interface for plugins that cache values between calls."],[9,"get","","Return a copy of the plugin's produced value.",49],[9,"get_ref","","Return a reference to the plugin's produced value.",49],[9,"get_mut","","Return a mutable reference to the plugin's produced value.",49],[6,"Error","",""],[9,"name","","",50],[9,"description","","",50],[9,"cause","","",50],[9,"unwrap","","",50],[9,"abstract","","",50],[6,"ErrorRefExt","",""],[9,"is","","",51],[9,"downcast","","",51],[10,"catch","","If `Handler`'s call method produces an Err, then this method is called\nto produce a `Response` and possibly handle the error.",42],[10,"catch","","Try to `catch` an error thrown by this Middleware or a previous `BeforeMiddleware`.",39],[10,"catch","","Try to catch an error thrown by previous `AfterMiddleware`, the `Handler`, or a previous\n`BeforeMiddleware`.",40]],"paths":[[1,"Request"],[1,"Url"],[1,"Response"],[1,"Iron"],[1,"Request"],[1,"BufferedStream"],[1,"RequestWriter"],[1,"ResponseReader"],[2,"NetworkStream"],[1,"RequestBuffer"],[2,"RequestUri"],[1,"ResponseWriter"],[2,"Method"],[2,"RangeUnit"],[2,"AcceptableRanges"],[2,"Connection"],[1,"MediaType"],[1,"EntityTag"],[1,"Host"],[2,"TransferCoding"],[2,"ConsumeCommaLWSResult"],[2,"HeaderValueByteIteratorState"],[1,"HeaderValueByteIterator"],[1,"Vec"],[1,"String"],[1,"Url"],[1,"Tm"],[1,"HeaderCollection"],[1,"HeaderCollectionIterator"],[2,"Header"],[1,"HeaderCollection"],[1,"HeaderCollectionIterator"],[2,"Header"],[2,"ValueToken"],[2,"ValueToken"],[2,"Status"],[1,"ChainBuilder"],[1,"Box"],[1,"Arc"],[6,"BeforeMiddleware"],[6,"AfterMiddleware"],[6,"AroundMiddleware"],[6,"Handler"],[6,"Chain"],[1,"TypeMap"],[2,"HeaderLineErr"],[6,"WriterUtil"],[6,"HeaderEnum"],[6,"HeaderConvertible"],[6,"Plugin"],[6,"Error"],[6,"ErrorRefExt"]]};
searchIndex['mount'] = {"items":[[0,"","mount","`Mount` provides mounting middleware for the Iron framework."],[1,"Mount","","`Mount` is a simple mounting middleware."],[1,"OriginalUrl","","Exposes the original, unmodified path to be stored in `Request::extensions`."],[10,"new","","Creates a new instance of `Mount`.",0],[10,"mount","","Mounts a given `Handler` onto a route.",0],[10,"call","","",0]],"paths":[[1,"Mount"]]};

searchIndex['static_file'] = {"items":[[0,"","static_file","Static file-serving handler."],[1,"Static","","The static file-serving `Handler`."],[1,"NoFile","","The error returned when a requested URL doesn't map to a real file."],[1,"FileError","","The error returned when an IoError occurs during file serving."],[10,"clone","","",0],[10,"fmt","","",1],[10,"fmt","","",2],[10,"name","","",1],[10,"name","","",2],[10,"new","","Create a new instance of `Static` with a given root path.",0],[10,"call","","",0]],"paths":[[1,"Static"],[1,"NoFile"],[1,"FileError"]]};

searchIndex['urlencoded'] = {"items":[[0,"","urlencoded","URL Encoded Plugin for Iron."],[1,"UrlEncodedQuery","","Plugin for `Request` that extracts URL encoded data from the URL query string."],[1,"UrlEncodedBody","","Plugin for `Request` that extracts URL encoded data from the request body."],[4,"QueryMap","","Hashmap mapping strings to vectors of strings."],[10,"eval","","",0],[10,"eval","","",1]],"paths":[[1,"UrlEncodedQuery"],[1,"UrlEncodedBody"]]};

searchIndex['staticfile'] = {"items":[[0,"","staticfile","Static file-serving middleware."],[1,"Static","","The static file-serving `Middleware`."],[10,"clone","","",0],[10,"new","","Create a new instance of `Static` with a given root path.",0],[10,"favicon","","Create a favicon server from the given filepath.",0],[10,"enter","","",0]],"paths":[[1,"Static"]]};

searchIndex['lib'] = {"items":[[0,"","lib","`Mount` provides mounting middleware for the Iron framework."],[1,"Mount","","`Mount` is a simple mounting middleware."],[1,"OriginalUrl","","Exposes the original, unmodified path to be stored in `Request::extensions`."]],"paths":[]};

initSearch(searchIndex);
