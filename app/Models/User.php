<?php

namespace App\Models;

use Illuminate\Contracts\Auth\CanResetPassword;
use Illuminate\Contracts\Auth\MustVerifyEmail;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Foundation\Auth\User as Authenticatable;
use Illuminate\Notifications\Notifiable;
use Laravel\Sanctum\HasApiTokens;

class User extends Authenticatable implements CanResetPassword, MustVerifyEmail
{
    use HasApiTokens, HasFactory, Notifiable;

    /**
     * The attributes that are mass assignable.
     *
     * @var array<int, string>
     */
    protected $fillable = [
        'name',
        'email',
        'password',
        'phone_number',
        'country',
        'ref_name'

    ];


    /**
     * The attributes that should be hidden for serialization.
     *
     * @var array<int, string>
     */
    protected $hidden = [

        'country',
        'remember_token',
        'password',

    ];

    /**
     * The attributes that should be cast.
     *
     * @var array<string, string>
     */

    public function refLink()
    {
        return route('auth.register', ['ref' => $this->ref_name]);
    }



    protected $casts = [
        'email_verified_at' => 'datetime',
    ];

    public function application()
    {
        return $this->hasMany(Application::class);
    }

    public function roles()
    {
        return $this->hasOne(Role::class);
    }

    public function parent()
    {
        return $this->hasOne(Referal::class);
    }
}
