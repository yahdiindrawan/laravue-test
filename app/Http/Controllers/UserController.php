<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;

class UserController extends Controller
{
    public function login(Request $request){
        $validator = Validator::make($request->all(),[
            'email' => 'required',
            'password' => 'required',
        ]);
        if(Auth::attempt(['email' => $request->email, 'password' => $request->password])){
            $user = Auth::user();
            $tokenResult =  $user->createToken('Personal Access Token');
            $token = $tokenResult->token;
            if($request->remember_me){
                $token->expires_at = Carbon::now()->addWeeks(1);
            }
            $token->save();

            return response()->json([
                'user' => $user,
                'access_token'=>$tokenResult->accessToken,
                'token_type' => 'Bearer',
                'expires_at' => Carbon::parse($tokenResult->token->expires_at)->toDateTimeString()
            ]);
        }else{
            return response()->json(['error'=>'Unauthorized'],401);
        }
    }
    public function SubjectByUser($id){
        $userSubject = DB::table('user_subjects')->where('user_id', $id)->first();
        $subject = DB::table('subjects')->where('id', $userSubject->subject_id)->first();
        $user = DB::table('users')->where('id', $userSubject->user_id)->first();
        return response()->json([
            'user' => $user->name,
            'subject' => $subject->name
        ]);
    }
}
