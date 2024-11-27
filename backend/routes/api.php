<?php

use App\Http\Controllers\ChatController;
use App\Http\Resources\UserResource;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

Route::middleware(['auth:sanctum'])->get('/user', function (Request $request) {
    return new UserResource($request->user());
});

Route::middleware(['auth:sanctum'])
      ->group(function () {
            Route::post('/chat', [ChatController::class, 'createChatRoom']);         
       });